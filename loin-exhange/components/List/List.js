import React from 'react'
import { Table, Thead, Tbody, Col, Tr, Th} from './styled'
import { BookMark } from '../Icon'
import Alarm from '../Alarm'
import { arrangePercent, arrangePrice } from '../../util'

class List extends React.Component {
    render(){
        const { list, handleMore } = this.props
        return (
            <Table>
                <colgroup>
                    <Col width={'30px;'}/>
                    <Col width={'180px;'}/>
                    <Col width={'70px;'}/>
                    <Col width={'180px;'}/>
                    <Col width={'70px;'}/>
                    <Col width={'70px;'}/>
                    <Col width={'70px;'}/>
                    <Col width={'auto'}/>
                </colgroup>
                <Thead>
                    <Tr title={"true"}>
                        <Th></Th>
                        <Th>자산</Th>
                        <Th></Th>
                        <Th>price</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {list.map((item, idx) => (
                    <Tr key={idx}>
                        <Th><BookMark checked={true}/></Th>
                        <Th>{item.name}</Th>
                        <Th>{item.symbol.toUpperCase()}</Th>
                        <Th>{arrangePrice(item.current_price)}</Th>
                        <Th val={item.price_change_percentage_1h_in_currency}>{arrangePercent(item.price_change_percentage_1h_in_currency)}</Th>
                        <Th val={item.price_change_percentage_24h_in_currency}>{arrangePercent(item.price_change_percentage_24h_in_currency)}</Th>
                        <Th val={item.price_change_percentage_7d_in_currency}>{arrangePercent(item.price_change_percentage_7d_in_currency)}</Th>
                        {/* TODO 아래 */}
                        <Th>{arrangePrice(item.market_cap)}</Th>
                    </Tr>
                    ))}
                    {/* <Alarm/> */}
                    <Tr footer={'true'}>
                        <Th colSpan='8' onClick={() => handleMore()}> + 더보기</Th>
                    </Tr>
                </Tbody>
            </Table>
        )
    }
}

export default List 