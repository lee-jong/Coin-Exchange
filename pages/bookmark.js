import React from 'react'

import List from '../components/List'
import SelectBar from '../components/SelectBar'

class Bookmark extends React.Component {
  state = {
    list : [],
  }

  componentDidMount(){
    this.reloadList()
  }

  reloadList = () => {
    try{
      this.setState({
        list : JSON.parse(localStorage.getItem('bookMark')) != null ? JSON.parse(localStorage.getItem('bookMark')) : []
      })
    }catch(err){}
  }


  render(){
    const { list, pageInfo } = this.state
    return (
      <div>
          <SelectBar view={ false }/>
          <List list={ list } reloadList={ this.reloadList } pageInfo={ pageInfo } bookmark={ true }/>
      </div>
    )
  }
}

export default Bookmark
