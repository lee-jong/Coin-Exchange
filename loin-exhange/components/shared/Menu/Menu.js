import React from 'react'
import { MenuBar, MenuItem } from './styled'


class Menu extends React.Component {
    render(){
        return (
            <MenuBar>
                <MenuItem>
                    가상자산 시세 목록
                </MenuItem>
                <MenuItem>
                    북마크 목록
                </MenuItem>
            </MenuBar>
        )
    }
}

export default Menu;