import React from 'react'
import { Select } from './styled'

class OptionBox extends React.Component {
    render(){
        const { handleOption, pageInfo } = this.props
        return (
            <>
                <Select id="option" onChange={(e) => handleOption(e)} value={ pageInfo.option }>
                    <option value="All">전체보기</option>
                    <option value="BookMark">북마크 보기</option>
                </Select>
                <Select id="vs_currency" onChange={(e) => handleOption(e)} value={ pageInfo.vs_currency }>
                    <option value='krw'>KRW 보기</option>
                    <option value='usd'>USD 보기</option>
                </Select>
                <Select id="per_page" onChange={(e) => handleOption(e)} value={ pageInfo.per_page }>
                    <option value="10">10개 보기</option>
                    <option value="30">30개 보기</option>
                    <option value="50">50개 보기</option>
                </Select>
            </>
        )
    }
}

export default OptionBox