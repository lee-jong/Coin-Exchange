import React from 'react'
import { Bar } from './styled'
import OptionBox from '../OptionBox'

class SelectBar extends React.Component {
    render(){
        const { handleOption, pageInfo, view } = this.props
        return (
            <>
                <Bar>
                    {view && <OptionBox handleOption={ handleOption } pageInfo={ pageInfo }/>}
                </Bar>
            </>
        )
    }
}

export default SelectBar