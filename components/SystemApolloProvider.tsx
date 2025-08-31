import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// 系统API的HTTP链接 - 使用代理
const systemHttpLink = createHttpLink({
  uri: 'http://localhost:3001/api/graphql/system',
});

// 系统API的认证链接
const systemAuthLink = setContext((_, { headers }) => {
  const token = 'CCZnVSanwCwzS6edoC8-2ImbzJiZLeAD'; // 你的静态token

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

// 系统Apollo Client
export const systemApolloClient = new ApolloClient({
  link: systemAuthLink.concat(systemHttpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});
