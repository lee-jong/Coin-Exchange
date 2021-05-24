import styled from 'styled-components'
export const MenuBar = styled.div`
    height: 100px;
    display: flex;

`

export const MenuItem = styled.div`
    width:50%;
    padding-top : 40px;
    text-align: center;
    font-weight: 800;
    font-size: 25px;
    cursor: pointer;
    ${props => props.chk ? `border : 1px solid #e8e8e8` : `background-color : #eae0e063; color : #888`}
`
