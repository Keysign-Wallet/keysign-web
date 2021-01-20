import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import * as serviceWorker from './serviceWorker';
import App from './App';

const cache = new InMemoryCache();
const link: any = new HttpLink({
  uri: 'http://localhost:5555/graphql',
});

const client: any = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
