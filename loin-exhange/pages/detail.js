import React from 'react'
import CoinDetail from '../components/Detail/index'
import { withRouter } from 'next/router';
import { getCoinDetail, getCoinMarket } from '../actions/coin'
import { $router } from '../util/nextUtil'



class Detail extends React.Component {
    static async getInitialProps({query}) {
        let info = null;
        let market = null;
        let param = {
          vs_currency  : 'krw',
          price_change_percentage : '1h,24h,7d',
          ids : query.id
        }
        try{
            info = await getCoinDetail(query.id)
            market= await getCoinMarket(param)
        }catch(err){}

        return { info, market }
    }

    componentDidMount(){
        if(this.props.info === null) $router() 
    }

    render(){
        const { info, market } = this.props
        return(
            <CoinDetail info={ info } market={ market }/>
        )
    }
}

export default withRouter(Detail)