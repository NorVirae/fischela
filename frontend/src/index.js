import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {
  InMemoryCache, ApolloProvider, ApolloClient
} from "@apollo/client";

// import { ApolloProvider} from 'react-apollo';

// import {ApolloClient} from 'apollo-boost';


const client = new ApolloClient({
  uri:"http://localhost:8000/graphql",
  cache: new InMemoryCache()
  })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
