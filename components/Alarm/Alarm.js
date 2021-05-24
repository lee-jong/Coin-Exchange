import React from 'react'
import { Div } from './styled'

class Alarm extends React.Component {
    render(){
        const { checked } = this.props
        return (
            <Div>북마크가 { checked ? '등록' : '해제' } 되었습니다.</Div>
        )
    }
}

export default Alarm