import React from 'react'
import { Div, Spinner } from './styled'

class Loading extends React.Component {
    render(){
        return (
            <>
                <Div>
                    <Spinner src={'/static/images/spinner.gif'} />
                </Div>
            </>
        )
    }
}

export default Loading