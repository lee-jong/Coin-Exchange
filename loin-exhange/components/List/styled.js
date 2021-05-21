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
    ${props => props.title ? `height : 30px;` : `height : 50px;`}
    ${props => props.footer && `border: 0.1px solid #e8e8e8`}
`

export const Th = styled.th`
    vertical-align : middle;
    text-align: center;
`
