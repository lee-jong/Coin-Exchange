import React from 'react'
import { Table, Thead, Tbody, Col, Tr, Th} from './styled'

class List extends React.Component {
    render(){
        return (
            <Table>
                <colgroup>
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
                        <Th width={'100px'}>자산</Th>
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
                        <Th>자산</Th>
                        <Th>XXX</Th>
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                    <Tr>
                        <Th>자산</Th>
                        <Th></Th>
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                    <Tr>
                        <Th>자산</Th>
                        <Th></Th>
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                    <Tr>
                        <Th>자산</Th>
                        <Th></Th>
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                    <Tr>
                        <Th>자산</Th>
                        <Th></Th>
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                    <Tr>
                        <Th>자산</Th>
                        <Th></Th>
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                    <Tr>
                        <Th>자산</Th>
                        <Th></Th>
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                    <Tr>
                        <Th>자산</Th>
                        <Th></Th>
                        <Th>Pice</Th>
                        <Th>1H</Th>
                        <Th>24H</Th>
                        <Th>7D</Th>
                        <Th>24H Volume</Th>
                    </Tr>
                    <Tr footer={'true'}>
                        <Th colSpan='7'> + 더보기</Th>
                    </Tr>
                </Tbody>
            </Table>
        )
    }
}

export default List 