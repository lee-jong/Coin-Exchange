import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import Alarm from '../../Alarm'


class BookMark extends React.Component {
    timer = null;
    state = {
        view : false,
        checked : false
    }

    componentDidMount(){
        const { coin } = this.props
        let bookMarkList = JSON.parse(localStorage.getItem('bookMark'))
        if(bookMarkList != null && bookMarkList.findIndex(item => item.id === coin.id) >= 0) this.setState({checked : true})
        else this.setState({checked : false})
    }

    bookMarkChk = () => {
        const { checked } = this.state
        const { coin } = this.props
        let bookMarkList = JSON.parse(localStorage.getItem('bookMark'))
        if(checked){
            let idx = bookMarkList.findIndex(item => item.id === coin.id)
            bookMarkList.splice(idx, 1)
            localStorage.setItem('bookMark', JSON.stringify(bookMarkList))
            this.setState({checked : false})
        }else{
            if(bookMarkList === null) localStorage.setItem('bookMark', JSON.stringify([coin]))
            else localStorage.setItem('bookMark', JSON.stringify(bookMarkList.concat([coin])))
            this.setState({checked : true})
        }
        this.viewToast()
    }
    
    viewToast = () => {
        clearInterval(this.timer)
        this.timer = null
        this.setState({
            view : true
        }, () => {
            this.timer = setInterval(() => {
                this.setState({
                    view : false
                })
                clearInterval(this.timer)
                this.timer = null
            }, 800)
        })
    }

    render(){
        const { view, checked } = this.state
        console.log("!", checked)
        return(
            <>
                {checked ?
                <>
                    <Icon.StarFill onClick={() => this.bookMarkChk()} color={'yellow'}/> 
                    {view && <Alarm checked={ checked }/>}
                </>
                    :
                <>
                    <Icon.StarFill onClick={() => this.bookMarkChk()} color={'gray'}/>
                    {view && <Alarm checked={ checked }/>}
                </>
                }
            </>
        )
    }
}

export default BookMark