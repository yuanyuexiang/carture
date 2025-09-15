import { WechatUserInfo } from './wechat-auth';

interface VisitRecord {
  openId: string;
  boutiqueId: string;
  timestamp: number;
  source: string;
}

class VisitRecorderManager {
  private static instance: VisitRecorderManager;
  private recentRecords: Map<string, VisitRecord> = new Map();
  private pendingVisits: Set<string> = new Set();
  
  // 3分钟内认为是重复访问
  private readonly DUPLICATE_INTERVAL = 3 * 60 * 1000;

  constructor() {
    this.loadFromLocalStorage();
    this.startCleanupTimer();
  }

  static getInstance(): VisitRecorderManager {
    if (!VisitRecorderManager.instance) {
      VisitRecorderManager.instance = new VisitRecorderManager();
    }
    return VisitRecorderManager.instance;
  }

  /**
   * 检查localStorage是否可用
   */
  private isLocalStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && 
             typeof window.localStorage !== 'undefined' &&
             window.localStorage !== null;
    } catch (error) {
      return false;
    }
  }

  /**
   * 从localStorage加载状态
   */
  private loadFromLocalStorage(): void {
    // 在React Native环境中直接返回，避免访问localStorage
    if (!this.isLocalStorageAvailable()) {
      console.log('📚 localStorage不可用（React Native环境），跳过状态加载');
      return;
    }

    try {
      const savedRecords = window.localStorage!.getItem('visit_records_cache');
      if (savedRecords) {
        const records: VisitRecord[] = JSON.parse(savedRecords);
        const now = Date.now();
        
        // 只加载未过期的记录
        records.forEach(record => {
          if (now - record.timestamp < this.DUPLICATE_INTERVAL) {
            const key = this.getRecordKey(record.openId, record.boutiqueId);
            this.recentRecords.set(key, record);
          }
        });
        
        console.log('📚 加载访问记录缓存:', this.recentRecords.size, '条记录');
      }
    } catch (error) {
      console.error('加载访问记录缓存失败:', error);
    }
  }

  /**
   * 保存到localStorage
   */
  private saveToLocalStorage(): void {
    // 在React Native环境中直接返回，避免访问localStorage
    if (!this.isLocalStorageAvailable()) {
      console.log('📚 localStorage不可用（React Native环境），跳过状态保存');
      return;
    }

    try {
      const records = Array.from(this.recentRecords.values());
      window.localStorage!.setItem('visit_records_cache', JSON.stringify(records));
    } catch (error) {
      console.error('保存访问记录缓存失败:', error);
    }
  }

  /**
   * 清理过期记录
   */
  private cleanExpiredRecords(): void {
    const now = Date.now();
    let cleanedCount = 0;
    
    for (const [key, record] of this.recentRecords.entries()) {
      if (now - record.timestamp >= this.DUPLICATE_INTERVAL) {
        this.recentRecords.delete(key);
        cleanedCount++;
      }
    }
    
    if (cleanedCount > 0) {
      console.log('📚 清理过期访问记录:', cleanedCount, '条');
      this.saveToLocalStorage();
    }
  }

  /**
   * 启动定期清理定时器
   */
  private startCleanupTimer(): void {
    // 每分钟清理一次过期记录
    setInterval(() => {
      this.cleanExpiredRecords();
    }, 60 * 1000);
  }

  /**
   * 生成记录的唯一键
   */
  private getRecordKey(openId: string, boutiqueId: string): string {
    return `${openId}-${boutiqueId}`;
  }

  /**
   * 检查是否为重复访问（三层保护）
   */
  private isDuplicateVisit(openId: string, boutiqueId: string): boolean {
    const key = this.getRecordKey(openId, boutiqueId);
    
    // 第一层：检查并发保护
    if (this.pendingVisits.has(key)) {
      console.log('🚫 重复访问被拦截 - 并发保护:', { openId, boutiqueId });
      return true;
    }
    
    // 第二层：检查时间间隔
    const recentRecord = this.recentRecords.get(key);
    if (recentRecord) {
      const timeSinceLastRecord = Date.now() - recentRecord.timestamp;
      if (timeSinceLastRecord < this.DUPLICATE_INTERVAL) {
        console.log('🚫 重复访问被拦截 - 时间间隔保护:', { 
          openId, 
          boutiqueId, 
          间隔: `${Math.round(timeSinceLastRecord / 1000)}秒` 
        });
        return true;
      }
    }
    
    return false;
  }

  /**
   * 记录新的访问
   */
  private recordVisit(openId: string, boutiqueId: string, source: string): void {
    const key = this.getRecordKey(openId, boutiqueId);
    const record: VisitRecord = {
      openId,
      boutiqueId,
      timestamp: Date.now(),
      source
    };
    
    this.recentRecords.set(key, record);
    this.saveToLocalStorage();
    
    console.log('📝 记录访问:', { 
      openId: openId.substring(0, 8) + '***', 
      boutiqueId, 
      source,
      缓存记录数: this.recentRecords.size
    });
  }

  /**
   * 尝试记录访问（带完整的重复检查和保护）
   */
  async attemptRecordVisit(
    openId: string, 
    boutiqueId: string, 
    userInfo: WechatUserInfo, 
    recordVisitCallback: () => Promise<void>,
    source: string = 'manual'
  ): Promise<boolean> {
    const key = this.getRecordKey(openId, boutiqueId);
    
    try {
      // 检查是否为重复访问
      if (this.isDuplicateVisit(openId, boutiqueId)) {
        return false;
      }
      
      // 添加并发保护
      this.pendingVisits.add(key);
      
      try {
        // 调用实际的记录函数
        await recordVisitCallback();
        
        // 记录成功的访问
        this.recordVisit(openId, boutiqueId, source);
        
        console.log('✅ 访问记录创建成功:', { 
          openId: openId.substring(0, 8) + '***', 
          boutiqueId,
          source
        });
        
        return true;
        
      } finally {
        // 无论成功失败都要移除并发保护
        this.pendingVisits.delete(key);
      }
      
    } catch (error) {
      console.error('❌ 访问记录创建失败:', error);
      this.pendingVisits.delete(key);
      return false;
    }
  }

  /**
   * 获取统计信息（用于调试）
   */
  getStats() {
    return {
      recentRecords: this.recentRecords.size,
      pendingVisits: this.pendingVisits.size,
      records: Array.from(this.recentRecords.entries()).map(([key, record]) => ({
        key,
        openId: record.openId.substring(0, 8) + '***',
        boutiqueId: record.boutiqueId,
        timestamp: new Date(record.timestamp).toLocaleString(),
        source: record.source
      }))
    };
  }
}

// 导出单例实例
export const visitRecorderManager = VisitRecorderManager.getInstance();