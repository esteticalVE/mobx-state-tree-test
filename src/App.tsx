import React from 'react'
import { FormComponent, ListComponent } from './components'
import { GlobalStyle, Container, Card, Layout } from './global-style'

const App: React.FC = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Container>
        <h1>TODO-list</h1>
        <Card>
          <FormComponent />
          <ListComponent />
        </Card>
      </Container>
    </Layout>
  )
}

export default App
