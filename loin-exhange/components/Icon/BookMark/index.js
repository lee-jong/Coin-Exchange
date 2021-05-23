import React from 'react'
import * as Icon from 'react-bootstrap-icons';


class BookMark extends React.Component {
    render(){
        const {checked} = this.props
        return(
            <>
                {checked ? <Icon.StarFill color={'yellow'}/> : <Icon.StarFill color={'gray'}/>}
            </>
        )
    }
}

export default BookMark