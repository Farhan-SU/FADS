import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import 'normalize.css';
import './index.scss';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api-us-east-1.graphcms.com/v2/ckf8z1uao08mm01wghz4k17at/master' }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
  <Router>
  <ScrollToTop/>
    <App/>  
  </Router>
  </ApolloProvider>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
