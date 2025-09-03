import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import React from 'react';

// 选择API端点
const getApiUri = () => {
  // 优先使用环境变量配置的API端点
  const envApiUrl = process.env.EXPO_PUBLIC_API_URL || process.env.REACT_APP_API_URL;
  if (envApiUrl) {
    console.log('🌐 使用环境变量API端点:', envApiUrl);
    return envApiUrl;
  }

  // 重新检测环境，确保在运行时检测
  const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV !== 'production';
  const isRealWeb = typeof window !== 'undefined' && 
                    typeof document !== 'undefined' && 
                    typeof window.location !== 'undefined' &&
                    typeof window.addEventListener === 'function';

  console.log('环境检测:', { 
    NODE_ENV: process.env.NODE_ENV, 
    isDev, 
    isWeb: isRealWeb,
    window: typeof window,
    document: typeof document,
    addEventListener: typeof window !== 'undefined' ? typeof window.addEventListener : 'undefined',
    __DEV__: typeof __DEV__ !== 'undefined' ? __DEV__ : 'undefined'
  });
  
  // 生产环境必须设置环境变量
  if (!isDev) {
    throw new Error('生产环境必须设置 EXPO_PUBLIC_API_URL 环境变量');
  }
  
  // 开发环境：只有真正的Web环境才使用代理
  if (isRealWeb && isDev) {
    // Web平台，使用本地代理
    const proxyUri = 'http://localhost:3001/api/graphql';
    console.log('🔄 Web环境使用代理:', proxyUri);
    return proxyUri;
  } else {
    // 开发环境：服务器端渲染或移动端，直接连接开发服务器
    const devDirectUri = 'https://forge.matrix-net.tech/graphql';
    console.log('📱 开发环境直接连接API:', devDirectUri);
    return devDirectUri;
  }
};

const httpLink = createHttpLink({
  uri: getApiUri(),
  fetchOptions: {
    mode: 'cors',
  },
});

const token = 'CCZnVSanwCwzS6edoC8-2ImbzJiZLeAD';

const authLink = setContext((_: any, context: any) => ({
  headers: {
    ...context.headers,
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
}));

// 错误处理链接
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    console.log('Network error details:', networkError);
  }
});

const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    // 移除已废弃的 addTypename 选项
    typePolicies: {},
  }),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
  // 使用新的 devtools 配置
  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  },
});

const WardrobeApolloProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default WardrobeApolloProvider;
