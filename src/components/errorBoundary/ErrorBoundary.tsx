import React, { PureComponent, ReactNode, ErrorInfo } from 'react'

type Props = {
  children: ReactNode
}
type ErrorState = {
  hasError: boolean
}

export class ErrorBoundary extends PureComponent<Props, ErrorState> {
  state = { hasError: false }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true }, () => {
      const { componentStack } = errorInfo
      const data = {
        message: error.toString(),
        stackTrace: componentStack,
      }
      console.error('error boundary', data)
    })
  }
  render() {
    const { hasError } = this.state
    const { children } = this.props
    return hasError ? <div>Что-то пошло не так...</div> : children
  }
}
