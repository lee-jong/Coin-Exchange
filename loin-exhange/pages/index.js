import React from 'react'
import { Container } from '../components/Main/styled'

import List from '../components/List'
import SelectBar from '../components/SelectBar'

class Main extends React.Component {
  render(){
    return (
      <Container>
          <SelectBar />
          <List />
      </Container>
    )
  }
}

export default Main
