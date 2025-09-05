import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useWechatAuth } from '../hooks/useWechatAuth';
import { WechatUserCard } from '../components/WechatUserCard';
import { WechatAuthStatus } from '../components/WechatAuthStatus';

/**
 * 用户信息页面
 * 集成微信授权，显示微信用户信息
 */
const UserInfoScreen: React.FC = () => {
  const {
    userInfo,
    loading,
    error,
    isAuthorized,
    isWechatBrowser,
    startAuth,
    forceReauth,
    clearAuth,
  } = useWechatAuth();

  // 重试授权
  const handleRetry = () => {
    if (error) {
      // 如果有错误，先清除然后重新开始
      clearAuth();
      startAuth();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 页面标题 */}
        <View style={styles.header}>
          <Text style={styles.title}>我的</Text>
          <Text style={styles.subtitle}>个人信息与设置</Text>
        </View>

        {/* 微信授权状态或用户信息 */}
        <View style={styles.mainContent}>
          {isAuthorized && userInfo ? (
            // 显示微信用户信息
            <WechatUserCard
              userInfo={userInfo}
              onForceReauth={forceReauth}
              onClearAuth={clearAuth}
            />
          ) : (
            // 显示授权状态
            <WechatAuthStatus
              loading={loading}
              error={error}
              isWechatBrowser={isWechatBrowser}
              isAuthorized={isAuthorized}
              onStartAuth={startAuth}
              onRetry={handleRetry}
            />
          )}
        </View>

        {/* 附加信息 */}
        {isAuthorized && userInfo && (
          <View style={styles.additionalInfo}>
            <Text style={styles.infoTitle}>关于微信授权</Text>
            <Text style={styles.infoText}>
              • 授权信息有效期为24小时
            </Text>
            <Text style={styles.infoText}>
              • 过期后需要重新授权
            </Text>
            <Text style={styles.infoText}>
              • 我们仅获取基本信息用于显示
            </Text>
            <Text style={styles.infoText}>
              • 您可以随时清除授权信息
            </Text>
          </View>
        )}

        {/* 调试信息（开发模式） */}
        {__DEV__ && (
          <View style={styles.debugInfo}>
            <Text style={styles.debugTitle}>调试信息</Text>
            <Text style={styles.debugText}>
              微信浏览器: {isWechatBrowser ? '是' : '否'}
            </Text>
            <Text style={styles.debugText}>
              授权状态: {isAuthorized ? '已授权' : '未授权'}
            </Text>
            <Text style={styles.debugText}>
              加载状态: {loading ? '加载中' : '完成'}
            </Text>
            {error && (
              <Text style={styles.debugError}>
                错误: {error}
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  mainContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  additionalInfo: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 4,
  },
  debugInfo: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    marginTop: 16,
  },
  debugTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  debugText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    marginBottom: 2,
  },
  debugError: {
    fontSize: 12,
    color: '#e64340',
    lineHeight: 16,
    marginTop: 4,
  },
});

export default UserInfoScreen;
      theme_dark
      theme_light
      text_direction
    }
    permissions_me
    roles_me {
      id
      name
      description
      icon
    }
  }
`;

const UPDATE_CURRENT_USER = gql`
  mutation UpdateCurrentUser($data: update_directus_users_input!) {
    update_users_me(data: $data) {
      id
      email
      first_name
      last_name
      location
      title
      description
      tags
      avatar {
        id
        filename_download
      }
      language
      status
      email_notifications
      appearance
      theme_dark
      theme_light
      text_direction
    }
  }
`;

// 内部组件 - 使用系统Apollo Client获取当前用户
const UserInfoContent: React.FC = () => {
  const { data: systemData, loading: systemLoading, error: systemError } = useQuery(GET_CURRENT_USER);
  const currentUser = systemData?.users_me;
  const permissions = systemData?.permissions_me;
  const roles = systemData?.roles_me;
  
  // 表单状态
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [emailNotifications, setEmailNotifications] = React.useState(false);
  const [appearance, setAppearance] = React.useState('');
  
  const [updateUser, { loading: updating }] = useMutation(UPDATE_CURRENT_USER);

  React.useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser.first_name || '');
      setLastName(currentUser.last_name || '');
      setEmail(currentUser.email || '');
      setLocation(currentUser.location || '');
      setTitle(currentUser.title || '');
      setDescription(currentUser.description || '');
      setLanguage(currentUser.language || '');
      setEmailNotifications(currentUser.email_notifications || false);
      setAppearance(currentUser.appearance || '');
    }
  }, [currentUser]);

  const handleSave = async () => {
    try {
      await updateUser({ 
        variables: { 
          data: { 
            first_name: firstName,
            last_name: lastName,
            email: email,
            location: location,
            title: title,
            description: description,
            language: language,
            email_notifications: emailNotifications,
            appearance: appearance
          } 
        } 
      });
      Alert.alert('保存成功', '用户信息已更新');
    } catch (e: any) {
      Alert.alert('保存失败', e.message);
    }
  };

  if (systemLoading) return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
      <Text style={styles.loadingText}>加载用户信息...</Text>
    </View>
  );
  
  if (systemError) return (
    <View style={styles.error}>
      <Text style={styles.errorText}>系统错误: {systemError.message}</Text>
    </View>
  );
  
  if (!currentUser) return (
    <View style={styles.error}>
      <Text style={styles.errorText}>未找到用户信息</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 用户头像和基本信息 */}
      <View style={styles.headerSection}>
        {currentUser.avatar && (
          <View style={styles.avatarContainer}>
            <Image 
              source={{ 
                uri: `https://forge.matrix-net.tech/assets/${currentUser.avatar.id}?width=150&height=150&fit=cover` 
              }}
              style={styles.avatar}
            />
            <Text style={styles.avatarInfo}>
              {currentUser.avatar.filename_download} • {Math.round((currentUser.avatar.filesize || 0) / 1024)}KB
            </Text>
          </View>
        )}
        
        <View style={styles.userBasicInfo}>
          <Text style={styles.userName}>
            {currentUser.first_name} {currentUser.last_name}
          </Text>
          <Text style={styles.userEmail}>{currentUser.email}</Text>
          <Text style={styles.userTitle}>{currentUser.title}</Text>
          
          <View style={styles.statusContainer}>
            <View style={[styles.statusBadge, { 
              backgroundColor: currentUser.status === 'active' ? '#4CAF50' : '#FF9800' 
            }]}>
              <Text style={styles.statusText}>{currentUser.status}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 系统信息 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔧 系统信息</Text>
        
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>用户ID</Text>
            <Text style={styles.infoValue}>{currentUser.id}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>最后访问</Text>
            <Text style={styles.infoValue}>
              {currentUser.last_access ? new Date(currentUser.last_access).toLocaleString('zh-CN') : '从未'}
            </Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>最后页面</Text>
            <Text style={styles.infoValue}>{currentUser.last_page || '未知'}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>认证方式</Text>
            <Text style={styles.infoValue}>{currentUser.provider || '默认'}</Text>
          </View>
        </View>

        {/* 角色信息 */}
        {roles && roles.length > 0 && (
          <View style={styles.rolesContainer}>
            <Text style={styles.infoLabel}>用户角色</Text>
            {roles.map((role: any, index: number) => role && (
              <View key={role.id} style={styles.roleItem}>
                <Text style={styles.roleName}>{role.icon || '👤'} {role.name}</Text>
                <Text style={styles.roleDescription}>{role.description || '无描述'}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* 可编辑信息 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✏️ 个人资料</Text>
        
        <View style={styles.formRow}>
          <View style={styles.formField}>
            <Text style={styles.label}>名字</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="请输入名字"
            />
          </View>
          
          <View style={styles.formField}>
            <Text style={styles.label}>姓氏</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="请输入姓氏"
            />
          </View>
        </View>

        <Text style={styles.label}>邮箱</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="请输入邮箱"
          keyboardType="email-address"
        />

        <Text style={styles.label}>职位/头衔</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="请输入职位或头衔"
        />

        <Text style={styles.label}>地理位置</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="请输入所在位置"
        />

        <Text style={styles.label}>个人描述</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="请输入个人描述"
          multiline
          numberOfLines={3}
        />

        <Text style={styles.label}>语言偏好</Text>
        <TextInput
          style={styles.input}
          value={language}
          onChangeText={setLanguage}
          placeholder="请输入语言代码 (如: zh-CN)"
        />
      </View>

      {/* 偏好设置 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚙️ 偏好设置</Text>
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>邮件通知</Text>
          <Switch
            value={emailNotifications}
            onValueChange={setEmailNotifications}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={emailNotifications ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>

        <Text style={styles.label}>外观模式</Text>
        <TextInput
          style={styles.input}
          value={appearance}
          onChangeText={setAppearance}
          placeholder="auto, light, dark"
        />

        {/* 主题信息显示 */}
        <View style={styles.themeInfo}>
          <Text style={styles.infoLabel}>当前主题设置</Text>
          <Text style={styles.infoValue}>
            浅色: {currentUser.theme_light || '默认'} | 
            深色: {currentUser.theme_dark || '默认'}
          </Text>
          <Text style={styles.infoValue}>
            文本方向: {currentUser.text_direction || '默认'}
          </Text>
        </View>
      </View>

      {/* 标签系统 */}
      {currentUser.tags && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏷️ 用户标签</Text>
          <Text style={styles.tagsText}>
            {JSON.stringify(currentUser.tags, null, 2)}
          </Text>
        </View>
      )}

      {/* 保存按钮 */}
      <View style={styles.actionSection}>
        <Button 
          title={updating ? '保存中...' : '保存更改'} 
          onPress={handleSave} 
          disabled={updating}
          color="#2196F3"
        />
      </View>
    </ScrollView>
  );
};

const UserInfoScreen: React.FC = () => {
  const systemClient = useSystemApolloClient();
  
  return (
    <ApolloProvider client={systemClient}>
      <UserInfoContent />
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
  },
  
  // 头部区域
  headerSection: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
  },
  avatarInfo: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  userBasicInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  userTitle: {
    fontSize: 14,
    color: '#2196F3',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
  // 分区样式
  section: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  
  // 信息网格
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  infoItem: {
    width: '50%',
    marginBottom: 12,
    paddingRight: 8,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  
  // 角色信息
  rolesContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  roleItem: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  roleName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  roleDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  
  // 表单样式
  formRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  formField: {
    flex: 1,
    marginRight: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  
  // 开关样式
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 16,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  
  // 主题信息
  themeInfo: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  
  // 标签样式
  tagsText: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    fontFamily: 'monospace',
  },
  
  // 操作区域
  actionSection: {
    margin: 16,
    marginTop: 0,
  },
});

export default UserInfoScreen;
