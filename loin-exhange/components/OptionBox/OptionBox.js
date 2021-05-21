import React from 'react'
import { Select } from './styled'

class OptionBox extends React.Component {
    render(){
        return (
            <>
                <Select>
                    <option>전체보기</option>
                </Select>
                <Select>
                    <option>KRW 보기</option>
                </Select>
                <Select>
                    <option>10개 보기</option>
                    <option>30개 보기</option>
                    <option>50개 보기</option>
                </Select>
            </>
        )
    }
}

export default OptionBox