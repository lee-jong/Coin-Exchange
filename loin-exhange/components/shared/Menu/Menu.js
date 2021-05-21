import React from 'react'
import { MenuBar, MenuItem } from './styled'


class Menu extends React.Component {
    render(){
        const { nowPage } = this.props
        return (
            <MenuBar>
                <MenuItem chk={ nowPage == '/' }>
                    가상자산 시세 목록
                </MenuItem>
                <MenuItem chk={ nowPage == '/bookmark'}>
                    북마크 목록
                </MenuItem>
            </MenuBar>
        )
    }
}

export default Menu;