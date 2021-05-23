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
      price_change_percentage : '1h, 24h, 7d'
    }
    try{
      list = await getCoinMarkets(data)
    }catch(err){
      console.log("err", err)
    }

    return { list }
  }


  render(){
    console.log("list", this.props.list)
    return (
      <div>
          <SelectBar />
          <List />
      </div>
    )
  }
}

export default Main
