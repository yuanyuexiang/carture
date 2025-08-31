import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { systemApolloClient } from '../components/SystemApolloProvider';
import { useGetCurrentUserQuery, useUpdateCurrentUserMutation } from '../generated/system-graphql';

const USER_ID = '1'; // 可替换为登录后获取的 id

// 内部组件 - 使用系统Apollo Client获取当前用户
const UserInfoContent: React.FC = () => {
  const { data: systemData, loading: systemLoading, error: systemError } = useGetCurrentUserQuery();
  const currentUser = systemData?.users_me;
  
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [updateUser, { loading: updating }] = useUpdateCurrentUserMutation();

  React.useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser.first_name || '');
      setEmail(currentUser.email || '');
    }
  }, [currentUser]);

  const handleSave = async () => {
    try {
      await updateUser({ 
        variables: { 
          data: { 
            first_name: firstName, 
            email: email 
          } 
        } 
      });
      Alert.alert('保存成功');
    } catch (e: any) {
      Alert.alert('保存失败', e.message);
    }
  };

  if (systemLoading) return <ActivityIndicator />;
  if (systemError) return <Text>系统错误: {systemError.message}</Text>;
  if (!currentUser) return <Text>未找到用户</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>用户ID: {currentUser.id}</Text>
      <Text style={styles.label}>状态: {currentUser.status}</Text>
      {currentUser.role && (
        <Text style={styles.label}>角色: {currentUser.role.name}</Text>
      )}
      <Text style={styles.divider}>━━━━━━━━━━━━━━━━━━━━</Text>
      
      <Text style={styles.label}>邮箱:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="邮箱"
      />
      <Text style={styles.label}>姓名:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="姓名"
      />
      <Button title={updating ? '保存中...' : '保存'} onPress={handleSave} disabled={updating} />
    </View>
  );
};

const UserInfoScreen: React.FC = () => {
  return (
    <ApolloProvider client={systemApolloClient}>
      <UserInfoContent />
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  divider: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ccc',
    marginVertical: 16,
  },
});

export default UserInfoScreen;
