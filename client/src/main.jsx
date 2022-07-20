import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserContext } from './Context/User/UserContext'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  from,
  HttpLink
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { HashRouter } from 'react-router-dom'
import { UserProvider } from './Context/User/UserProvider'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  if (token) {
    operation.setContext({
      headers: {
        authorization
      }
    })
  }
  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location = '/#/user'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-with-react.vercel.app/graphql'
    })
  ])
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <UserProvider>
      <HashRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HashRouter>
    </UserProvider>
  </ApolloProvider>
)
