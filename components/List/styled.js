import styled from 'styled-components'

export const Table = styled.table`
    width : 100.3%;
`

export const Thead = styled.thead`
    background-color : #e8e8e8;
`
export const Tbody = styled.tbody`
    background-color : white;
`
export const Col = styled.col`
    ${props => props.width && `width : ${props.width}`}
`

export const Tr = styled.tr`
    ${props => props.title ? `height : 30px;` : `height : 50px; & > th:nth-child(-n+2){cursor: pointer;}`}
    ${props => props.footer && `border: 0.1px solid #e8e8e8; cursor: pointer;`}
    `
    
    export const Th = styled.th`
    vertical-align : middle;
    &:nth-child(-n+4){ text-align: center; }
    &:nth-child(n+4){ text-align: right; }
    &:last-child { padding-right : 15px;}
    ${props => props.val != undefined ? (Math.sign(props.val) > 0 ? 'color : red' : 'color : blue') : ''}
`
