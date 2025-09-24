import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import React from 'react';

// 选择系统API端点
const getSystemApiUri = () => {
  // 检测是否为真正的Web环境
  const isRealWeb = typeof window !== 'undefined' && 
                    typeof document !== 'undefined' && 
                    typeof window.location !== 'undefined';

  const isDev = process.env.NODE_ENV === 'development';

  console.log('系统端点环境检测:', { 
    NODE_ENV: process.env.NODE_ENV, 
    isDev, 
    isWeb: isRealWeb,
    location: isRealWeb ? window.location.origin : 'undefined'
  });
  
  // 生产环境：使用当前域名 + /graphql/system
  if (!isDev && isRealWeb) {
    const productionUri = `${window.location.origin}/graphql/system`;
    console.log('🚀 生产环境系统端点:', productionUri);
    return productionUri;
  }
  
  // 开发环境：Web平台使用代理
  if (isDev && isRealWeb) {
    const proxyUri = 'http://localhost:3001/api/graphql/system';
    console.log('🔄 开发环境系统端点代理:', proxyUri);
    return proxyUri;
  } 
  
  // 开发环境：移动端或SSR，直接连接开发服务器
  const devDirectUri = 'https://forge.kcbaotech.com/graphql/system';
  console.log('📱 开发环境系统端点直连:', devDirectUri);
  return devDirectUri;
};

const systemHttpLink = createHttpLink({
  uri: getSystemApiUri(),
  fetchOptions: {
    mode: 'cors',
  },
});

const token = 'CCZnVSanwCwzS6edoC8t2ImbzJiZLeAD';

const systemAuthLink = setContext((_: any, context: any) => ({
  headers: {
    ...context.headers,
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
}));

// 系统错误处理链接
const systemErrorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[System GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }

  if (networkError) {
    console.log(`[System Network error]: ${networkError}`);
  }
});

const systemClient = new ApolloClient({
  link: from([systemErrorLink, systemAuthLink, systemHttpLink]),
  cache: new InMemoryCache({
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
  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  },
});

const SystemApolloProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ApolloProvider client={systemClient}>{children}</ApolloProvider>
);

export const useSystemApolloClient = () => systemClient;

export default SystemApolloProvider;
