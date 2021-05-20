import React from 'react'
import { Bar } from './styled'
import OptionBox from '../OptionBox'

class SelectBar extends React.Component {
    render(){
        return (
            <>
                <Bar>
                    <OptionBox />
                </Bar>
            </>
        )
    }
}

export default SelectBar