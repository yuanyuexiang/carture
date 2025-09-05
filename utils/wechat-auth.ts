/**
 * 微信授权工具类
 * 基于前端驱动模式的微信授权实现
 */

export interface WechatUserInfo {
  openid: string;
  nickname: string;
  headimgurl: string;
  sex: number;
  language: string;
  country: string;
  province: string;
  city: string;
  privilege: string[];
  login_time: number;
  expires_at?: number;
}

export interface AuthStatusResponse {
  exists: boolean;
  need_auth: boolean;
  user_info?: WechatUserInfo;
  message?: string;
}

export interface WechatAuthResponse {
  message: string;
  user_info: WechatUserInfo;
}

export class WechatAuth {
  private static readonly APP_ID = 'wx1eb05232cfbb49f7';
  private static readonly STORAGE_KEY_USER_INFO = 'wechat_user_info';
  private static readonly STORAGE_KEY_OPENID = 'wechat_openid';

  /**
   * 检查是否在微信浏览器中
   */
  static isWechatBrowser(): boolean {
    const userAgent = navigator.userAgent.toLowerCase();
    const isWechat = userAgent.includes('micromessenger');
    
    // 开发模式：可以通过URL参数强制启用微信模式
    const urlParams = new URLSearchParams(window.location.search);
    const forceWechat = urlParams.get('force_wechat') === 'true';
    
    console.log('=== 检查微信浏览器环境 ===');
    console.log('User Agent:', userAgent);
    console.log('是否包含 micromessenger:', isWechat);
    console.log('强制微信模式:', forceWechat);
    
    return isWechat || forceWechat;
  }

  /**
   * 生成状态参数，防止CSRF攻击
   */
  static generateState(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  /**
   * 构建微信授权链接
   */
  static buildAuthURL(): string {
    const redirectURI = encodeURIComponent(window.location.href.split('?')[0]);
    const state = this.generateState();
    
    // 保存state用于验证
    localStorage.setItem('wechat_auth_state', state);
    
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.APP_ID}&redirect_uri=${redirectURI}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`;
  }

  /**
   * 开始微信授权流程
   */
  static startAuth(): void {
    console.log('=== WechatAuth.startAuth 开始 ===');
    console.log('检查微信浏览器环境...');
    
    if (!this.isWechatBrowser()) {
      console.warn('当前不在微信浏览器中，无法进行微信授权');
      console.log('User Agent:', navigator.userAgent);
      return;
    }
    
    console.log('在微信浏览器中，构建授权URL...');
    const authURL = this.buildAuthURL();
    console.log('授权URL:', authURL);
    console.log('即将跳转到微信授权页面...');
    
    window.location.href = authURL;
    console.log('跳转命令已执行');
  }

  /**
   * 处理微信授权回调
   */
  static async handleAuthCallback(code: string, state: string): Promise<WechatUserInfo | null> {
    try {
      // 验证state参数
      const savedState = localStorage.getItem('wechat_auth_state');
      if (state !== savedState) {
        throw new Error('State参数验证失败');
      }

      const response = await fetch('/api/wechat/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,
          state: state
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.code !== 200) {
        throw new Error(data.message || '授权失败');
      }

      const userInfo = data.data.user_info;
      
      // 保存用户信息到本地存储
      this.saveUserInfo(userInfo);
      
      // 清理URL参数
      this.cleanURLParams();
      
      return userInfo;
    } catch (error) {
      console.error('微信授权回调处理失败:', error);
      throw error;
    } finally {
      // 清理state
      localStorage.removeItem('wechat_auth_state');
    }
  }

  /**
   * 检查用户授权状态
   */
  static async checkAuthStatus(openid: string): Promise<AuthStatusResponse> {
    try {
      const response = await fetch(`/api/user/${openid}`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.code !== 200) {
        throw new Error(data.message || '状态检查失败');
      }

      return data.data;
    } catch (error) {
      console.error('授权状态检查失败:', error);
      throw error;
    }
  }

  /**
   * 保存用户信息到本地存储
   */
  static saveUserInfo(userInfo: WechatUserInfo): void {
    localStorage.setItem(this.STORAGE_KEY_USER_INFO, JSON.stringify(userInfo));
    localStorage.setItem(this.STORAGE_KEY_OPENID, userInfo.openid);
  }

  /**
   * 从本地存储获取用户信息
   */
  static getUserInfo(): WechatUserInfo | null {
    try {
      const userInfoStr = localStorage.getItem(this.STORAGE_KEY_USER_INFO);
      return userInfoStr ? JSON.parse(userInfoStr) : null;
    } catch (error) {
      console.error('获取本地用户信息失败:', error);
      return null;
    }
  }

  /**
   * 从本地存储获取OpenID
   */
  static getOpenId(): string | null {
    return localStorage.getItem(this.STORAGE_KEY_OPENID);
  }

  /**
   * 清除本地用户信息
   */
  static clearUserInfo(): void {
    localStorage.removeItem(this.STORAGE_KEY_USER_INFO);
    localStorage.removeItem(this.STORAGE_KEY_OPENID);
  }

  /**
   * 检查授权是否过期
   */
  static isAuthExpired(userInfo: WechatUserInfo): boolean {
    if (!userInfo.expires_at) {
      // 如果没有过期时间，使用login_time + 24小时
      const expireTime = userInfo.login_time + (24 * 60 * 60);
      return Date.now() / 1000 > expireTime;
    }
    return Date.now() / 1000 > userInfo.expires_at;
  }

  /**
   * 清理URL中的授权参数
   */
  static cleanURLParams(): void {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('code');
      url.searchParams.delete('state');
      window.history.replaceState({}, document.title, url.toString());
    }
  }

  /**
   * 初始化微信授权检查
   * 页面加载时调用
   */
  static async initialize(): Promise<WechatUserInfo | null> {
    try {
      // 检查URL中是否有授权回调参数
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');

      if (code && state) {
        // 处理微信授权回调
        return await this.handleAuthCallback(code, state);
      }

      // 检查本地是否有用户信息
      const localUserInfo = this.getUserInfo();
      if (localUserInfo) {
        // 检查是否过期
        if (this.isAuthExpired(localUserInfo)) {
          console.log('本地授权已过期，需要重新授权');
          this.clearUserInfo();
          return null;
        }

        // 服务器端验证授权状态
        try {
          const authStatus = await this.checkAuthStatus(localUserInfo.openid);
          if (authStatus.need_auth) {
            console.log('服务器端授权已过期，需要重新授权');
            this.clearUserInfo();
            return null;
          }

          // 授权有效，返回用户信息
          return authStatus.user_info || localUserInfo;
        } catch (error) {
          console.error('服务器端状态检查失败，使用本地信息:', error);
          return localUserInfo;
        }
      }

      return null;
    } catch (error) {
      console.error('微信授权初始化失败:', error);
      return null;
    }
  }
}
