import React from 'react'
import { Table, Thead, Tbody, Col, Tr, Th} from './styled'
import { BookMark } from '../Icon'
import { arrangePercent, arrangePrice } from '../../util'
import { $router } from '../../util/nextUtil'

class List extends React.Component {
    render(){
        const { list, handleMore, reloadList, pageInfo, bookmark } = this.props
        return (
            <Table>
                <colgroup>
                    <Col width={'30px;'}/>
                    <Col width={'180px;'}/>
                    <Col width={'120px;'}/>
                    <Col width={'180px;'}/>
                    <Col width={'120px;'}/>
                    <Col width={'120px;'}/>
                    <Col width={'120px;'}/>
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
                    {list.length <= 0 && 
                        <Tr>
                            <Th colSpan='8'> 조회된 결과가 없습니다.</Th>
                        </Tr>
                    }
                    {list.map((item, idx) => (
                        <Tr key={idx}>
                            <Th><BookMark coin={item} reloadList={reloadList} type={ bookmark ? item.type : pageInfo.vs_currency }/></Th>
                            <Th onClick={() => $router(`detail?id=${item.id}`)}>{item.name}</Th>
                            <Th>{item.symbol.toUpperCase()}</Th>
                            <Th>{arrangePrice(item.current_price, bookmark ? item.type : pageInfo.vs_currency)}</Th>
                            <Th val={item.price_change_percentage_1h_in_currency}>{arrangePercent(item.price_change_percentage_1h_in_currency)}</Th>
                            <Th val={item.price_change_percentage_24h_in_currency}>{arrangePercent(item.price_change_percentage_24h_in_currency)}</Th>
                            <Th val={item.price_change_percentage_7d_in_currency}>{arrangePercent(item.price_change_percentage_7d_in_currency)}</Th>
                            <Th>{arrangePrice(item.market_cap, bookmark ? item.type : pageInfo.vs_currency)}</Th>
                        </Tr>
                    ))}
                    {list.length > 0 && !bookmark &&
                        <Tr footer={'true'}>
                            <Th colSpan='8' onClick={() => handleMore()}> + 더보기</Th>
                        </Tr>
                    }
                </Tbody>
            </Table>
        )
    }
}

export default List 