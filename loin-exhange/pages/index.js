import React from 'react'

import List from '../components/List'
import SelectBar from '../components/SelectBar'

class Main extends React.Component {
  render(){
    return (
      <div>
          <SelectBar />
          <List />
      </div>
    )
  }
}

export default Main
