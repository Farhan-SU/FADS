import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api-us-east-1.graphcms.com/v2/ckf9qzcqu08cb01wf2wtlbco8/master' }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App/>  
  </ApolloProvider>
  </BrowserRouter>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
