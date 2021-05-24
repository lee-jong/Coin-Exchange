import React from 'react'
import { arrangePercent, arrangePrice } from '../../util'
import { ArrowLeftRight, BookMark } from '../Icon'
import { Header, Title, Info, Table, PriceInfo_h, PriceInfo_f, Tbody, Tr, Th, Td,
         Price,Per, Total, Calculation, Footer, Content, Select, Input } from './styled'

class Detail extends React.Component {
    state = {
        option : 'krw',
        btcCnt : 1
    }

    handleState = (e) => {
        let id = e.target.id
        let val = e.target.value
        let reg = /^[0-9]$/;
        if(id === 'btcCnt' && !reg.test(val)) return 
        this.setState({
            [id] : val
        })
    }

    render(){
        const { option, btcCnt } = this.state
        const { info, market } = this.props
        const { 
            market_cap_change_percentage_24h_in_currency,
            current_price,
            market_cap_change_24h_in_currency,
            market_cap,
            price_change_percentage_1h_in_currency
        } = this.props.info.market_data

        return(
            <div>
                <Header>
                    <Title>
                    <BookMark coin={ market[0] } type={ option }/>
                    <img src={ info.image.thumb }/>
                        비트코인
                    </Title>
                    <Select id="option" onChange={(e) => this.handleState(e)} value={option}>
                        <option value='krw'>KRW 보기</option>
                        <option value='usd'>USD 보기</option>
                    </Select>
                </Header>
                <Info>
                    <Table>
                        <Tbody>
                            <Tr><Th>시가총액 Rank</Th><Td>Rank #{ info.coingecko_rank }</Td></Tr>
                            <Tr><Th>웹사이트</Th><Td>{ info.links.homepage[0] }</Td></Tr>
                        </Tbody>
                    </Table>
                    <Price>
                        <PriceInfo_h>
                            <Per title={'true'}>
                                <div>{ arrangePrice(current_price[option], option) }</div>
                                <div>{ arrangePercent(price_change_percentage_1h_in_currency[option]) }</div>
                            </Per>
                            <Per>
                                <div>1.00000000 BTC</div>
                                <div>{ arrangePercent(market_cap_change_percentage_24h_in_currency[option]) }</div>
                            </Per>
                        </PriceInfo_h>
                        <PriceInfo_f>
                            <Total>
                                <div>시가총액</div>
                                <div>24시간 거래대금</div>
                            </Total>
                            <Total>
                                <div>{ arrangePrice(market_cap[option], option) }</div>
                                <div>{ arrangePrice(market_cap_change_24h_in_currency[option], option) }</div>
                            </Total>
                        </PriceInfo_f>
                    </Price>
                </Info>
                <Calculation>
                    <div>가격 계산</div>
                    <div>
                        <div>
                            <div>BTC</div>
                            <div><Input type="number" pattern="[0-9]*" id="btcCnt" defaultValue={ btcCnt } onChange={(e) => this.handleState(e)}/></div>
                        </div>
                        <ArrowLeftRight />
                        <div>
                            <div>KRW</div>
                            <div>{ arrangePrice(Number(current_price[option]) * Number(btcCnt), option) }</div>
                        </div>
                    </div>
                </Calculation>
                <Footer>
                    상세보기
                </Footer>
                <Content dangerouslySetInnerHTML={ {__html: info.description.ko.replace(/(\n|\r\n)/g, '<br>')} }/>
            </div>
        )
    }
}

export default Detail