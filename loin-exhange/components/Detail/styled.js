import styled from 'styled-components'

export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    padding-top:40px;
`

export const Title = styled.div`
    font-size : 25px;
    font-weight: 600;
`
export const Info = styled.div`
    padding-top:40px;
    display:flex;
`

export const Table = styled.table`
    height : 100px;
    width: 50%;
`
export const Pice = styled.div`
    width: 50%;
`

export const Tbody = styled.tbody``
export const Tr = styled.tr`
    border : 0.1px solid #888;
`
export const Th = styled.th`
    background-color : #e8e8e8;
    font-size : 15px;
    font-weight : 600;
    vertical-align : middle;
    width:30%;
`
export const Td = styled.td`
    vertical-align : middle;
    font-size : 15px;
    padding : 10px;
`
export const PiceInfo_h = styled.div`
`

export const Per = styled.div`
    display : flex;
    justify-content: flex-end;

    ${props => props.title == 'true' ? `
        & > div:first-child {
            font-size : 25px;
            font-weight: 600;
        }
        & > div:last-child {
            padding-top: 10px;
            font-size : 14px;
            font-weight: 600;
        }
    ` : `
        & > div:first-child {
            padding-top:5px;
            font-size : 8px;
        }
        & > div:last-child {
            padding-top: 5px;
            font-size : 8px;
        }
    `}


    & > div:last-child {
        color: red;
        padding-left :10px;
    }
`
export const PiceInfo_f = styled.div`
    padding-top:28px;
`

export const Total = styled.div`
    display : flex;
    justify-content: flex-end;
    padding-top:5px;
    & > div:first-child {
        font-size : 13px;
        width :50%;
        text-align: right;
    }
    & > div:last-child {
        font-size : 13px;
        padding-left : 100px;
        width :50%;;
        text-align: right;
    }
`

export const Calculation = styled.div`
    margin-top:40px;
    height : 150px;
    background-color : #e8e8e8;
    
    & > div: first-child {
        padding : 10px;
        font-size : 13.5px;
        font-weight : 600;
    }
    & > div:last-child {
        margin : 1%;;
        display : flex;
        height : 60px;
    }

    & > div:last-child > div {
        display : flex;
        width : 100%;
    }

    & > div:last-child > div > div:first-child {
        width:30%;
        margin-left:8%;
        font-size : 20px;
        font-weight : 600;
        padding-top:16px;
        text-align: center;
        border : solid 1px #888;

    }
    & > div:last-child > div > div:last-child {
        width:50%;
        background-color : white;
        text-align: right;
        padding:18px 30px 0 0;
        font-size : 18px;
        border : solid 1px #888;
    }
`

export const Footer = styled.div`
    margin-top:50px;
    height: 35px;
    text-align : center;
    padding-top: 15px;
    border-bottom : solid 1px #e8e8e8;
`

export const Content = styled.div`
    margin-top:20px;
`
