import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { HashRouter } from 'react-router-dom'
import { UserProvider } from './Context/User/UserProvider'

const client = new ApolloClient({
  uri: 'https://petgram-with-react.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <HashRouter>
      <ApolloProvider client={client}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ApolloProvider>
    </HashRouter>
  </UserProvider>
)
