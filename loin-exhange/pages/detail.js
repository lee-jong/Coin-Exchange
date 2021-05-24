import React from 'react'
import CoinDetail from '../components/Detail/index'
import { withRouter } from 'next/router';



class Detail extends React.Component {
    static async getInitialProps({query}) {
        console.log("!", query)
    }

    render(){
        return(
            <CoinDetail />
        )
    }
}

export default withRouter(Detail)