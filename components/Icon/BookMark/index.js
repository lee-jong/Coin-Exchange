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
        this.checkBookMark()
    }
    
    checkBookMark = () => {
        const { coin } = this.props
        let bookMarkList = JSON.parse(localStorage.getItem('bookMark'))
        if(bookMarkList != null && bookMarkList.findIndex(item => item.id === coin.id) >= 0) this.setState({checked : true})
        else this.setState({checked : false})
    }

    bookMarkChk = () => {
        const { checked } = this.state
        const { coin, type } = this.props
        this.setState({ checked : !checked })
        let bookMarkList = JSON.parse(localStorage.getItem('bookMark'))
        if(checked){
            let idx = bookMarkList.findIndex(item => item.id === coin.id)
            bookMarkList.splice(idx, 1)
            localStorage.setItem('bookMark', JSON.stringify(bookMarkList))
        }else{
            if(bookMarkList === null) localStorage.setItem('bookMark', JSON.stringify([{...coin, type}]))
            else localStorage.setItem('bookMark', JSON.stringify(bookMarkList.concat([{...coin, type}]).sort((a,b) => a['market_cap_rank'] - b['market_cap_rank'])))
        }
        this.viewToast(checked)
    }
    
    viewToast = () => {
        const { reloadList } = this.props
        clearInterval(this.timer)
        this.timer = null
        this.setState({
            view : true
        }, () => {
            this.timer = setInterval(() => {
                this.setState({
                    view : false
                })
                if(reloadList !== undefined) reloadList()
                this.checkBookMark()
                clearInterval(this.timer)
                this.timer = null
            }, 800)
        })
    }

    render(){
        const { view, checked } = this.state
        return(
            <>
                <Icon.StarFill onClick={() => this.bookMarkChk()} color={ checked ? 'yellow' : 'gray'}/> 
                {view && <Alarm checked={ checked }/>}
            </>
        )
    }
}

export default BookMark