import React from 'react'
import { Header, Title, Info, Table, priceInfo_h, priceInfo_f, Tbody, Tr, Th, Td, 
    price,Per, Total, Calculation, Footer, Content } from './styled'

class Detail extends React.Component {
    render(){
        return(
            <div>
                <Header>
                    <Title>
                        비트코인
                    </Title>
                    <span>KRW보기</span>
                </Header>
                <Info>
                    <Table>
                        <Tbody>
                            <Tr><Th>시가총액 Rank</Th><Td>Rank</Td></Tr>
                            <Tr><Th>웹사이트</Th><Td>ㅋㄷㅋㄷ</Td></Tr>
                        </Tbody>
                    </Table>
                    <price>
                        <priceInfo_h>
                            <Per title={'true'}>
                                <div>21,177,032</div>
                                <div>0.8%</div>
                            </Per>
                            <Per>
                                <div>1.00000000 BTC</div>
                                <div>0.1%</div>
                            </Per>
                        </priceInfo_h>
                        <priceInfo_f>
                            <Total>
                                <div>시가총액</div>
                                <div>24시간 거래대금</div>
                            </Total>
                            <Total>
                                <div>1231231231</div>
                                <div>1231231231</div>
                            </Total>
                        </priceInfo_f>
                    </price>
                </Info>
                <Calculation>
                    <div>가격 계산</div>
                    <div>
                        <div>
                            <div>BTC</div>
                            <div>1</div>
                        </div>
                        <span>아이콘</span>
                        <div>
                            <div>KRW</div>
                            <div>123123123</div>
                        </div>
                    </div>
                </Calculation>
                <Footer>
                    상세보기
                </Footer>
                <Content>
                    내용
                </Content>
            </div>
        )
    }
}

export default Detail