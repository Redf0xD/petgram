import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  ApolloClient,
  ApolloProvider,InMemoryCache
} from '@apollo/client'
const client = new ApolloClient({
  uri: 'https://petgram-with-react.vercel.app/graphql',
  cache: new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
)
