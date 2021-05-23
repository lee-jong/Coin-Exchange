import React from 'react'
import { Table, Thead, Tbody, Col, Tr, Th} from './styled'
import { BookMark } from '../Icon'
import Alarm from '../Alarm'

class List extends React.Component {
    render(){
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
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Th><BookMark checked={true}/></Th>
                        <Th>자산</Th>
                        <Th>XXX</Th>
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                    {/* <Alarm/> */}
                    <Tr>
                        <Th><BookMark checked={false}/></Th>
                        <Th>자산</Th>
                        <Th>XXX</Th>
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                    <Tr footer={'true'}>
                        <Th colSpan='8'> + 더보기</Th>
                    </Tr>
                </Tbody>
            </Table>
        )
    }
}

export default List 