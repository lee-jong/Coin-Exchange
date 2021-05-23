import React from 'react'

import List from '../components/List'
import SelectBar from '../components/SelectBar'

import { getCoinMarkets } from '../actions/coin'

class Main extends React.Component {
  static async getInitialProps({}) {
    let list = []
    let data = { 
      vs_currency  : 'krw',
      per_page : 10,
      price_change_percentage : '1h,24h,7d'
    }
    try{
      list = await getCoinMarkets(data)
    }catch(err){
      console.log("err", err)
    }

    return { list }
  }

  state = {
    list : this.props.list,
    pageInfo : {
      vs_currency : 'krw',
      page : 1,
      per_page : 10,
      price_change_percentage : '1h,24h,7d'
    }
  }

  getList = async () => {
    let { pageInfo } = this.state
    let list = []
    let data = {
      ...pageInfo
    }
    try{
      list = await getCoinMarkets(data)
    }catch(err){
      console.log("err", err)
    }

    return list
  }

  handleOption = (e) => {
    let { pageInfo } = this.state
    let id = e.target.id
    let val = e.target.value
    this.setState({
      pageInfo : {
        ...pageInfo,
        [id] : val,
        page : 1 
      }
    }, async () => {
      this.setState({
        list : await this.getList()
      })
    })
  }

  handleMore = () => {
    let { pageInfo, list } = this.state
    this.setState({
      pageInfo : {
        ...pageInfo,
        page : ++pageInfo.page
      }
    }, async () => {
      this.setState({
        list : list.concat(await this.getList())
      })
    })
  }


  render(){
    const { list, pageInfo } = this.state
    return (
      <div>
          <SelectBar handleOption={ this.handleOption } pageInfo={ pageInfo }/>
          <List list={ list } handleMore={ this.handleMore }/>
      </div>
    )
  }
}

export default Main
