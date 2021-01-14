import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { TodoStoreProvider } from './contexts'
import { ErrorBoundary } from './components/errorBoundary'

ReactDOM.render(
  <ErrorBoundary>
    <TodoStoreProvider>
      <App />
    </TodoStoreProvider>
  </ErrorBoundary>,
  document.getElementById('root')
)
