import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { from } from '@apollo/client/link/core';
import { onError } from '@apollo/client/link/error';
import { createHttpLink } from '@apollo/client/link/http';
import { ApolloProvider } from '@apollo/client/react';
import React from 'react';

// 选择API端点
const getApiUri = () => {
  // 检测是否为真正的Web环境
  const isRealWeb = typeof window !== 'undefined' && 
                    typeof document !== 'undefined' && 
                    typeof window.location !== 'undefined';

  const isDev = process.env.NODE_ENV === 'development';

  console.log('环境检测:', { 
    NODE_ENV: process.env.NODE_ENV, 
    isDev, 
    isWeb: isRealWeb,
    location: isRealWeb ? window.location.origin : 'undefined'
  });
  
  // 生产环境：使用当前域名 + /graphql
  if (!isDev && isRealWeb) {
    const productionUri = `${window.location.origin}/graphql`;
    console.log('🚀 生产环境使用当前域名:', productionUri);
    return productionUri;
  }
  
  // 开发环境：Web平台使用代理
  if (isDev && isRealWeb) {
    const proxyUri = 'http://localhost:3001/api/graphql';
    console.log('🔄 开发环境Web使用代理:', proxyUri);
    return proxyUri;
  } 
  
  // 开发环境：移动端或SSR，直接连接开发服务器
  const devDirectUri = 'https://forge.kcbaotech.com/graphql';
  console.log('📱 开发环境直接连接:', devDirectUri);
  return devDirectUri;
};

const httpLink = createHttpLink({
  uri: getApiUri(),
  fetchOptions: {
    mode: 'cors',
  },
});

const token = 'CCZnVSanwCwzS6edoC8t2ImbzJiZLeAD';

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

const WardrobeApolloProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default WardrobeApolloProvider;
