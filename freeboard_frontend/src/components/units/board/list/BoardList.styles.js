import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 1200px;
    margin : 0 auto;
`
export const TableTop = styled.div`
    border-top : 2px solid gray;
    margin-top: 20px;
`
export const TableBottom = styled.div`
    border-bottom: 2px solid gray;
`
export const Row = styled.div`
    display: flex;
`
export const RowTitle = styled.div`
    display : flex;
    flex-direction : row;
    line-height : 52px;
    align-items : center;
    border-bottom : 1px solid lightgray;
    height: 52px;

`
export const ColumnHeader = styled.div`
    width : 10%;
    text-align : center;
`
export const ColumnHeaderTitle = styled.div`
    width : 70%;
    text-align : center;
    color : gray;
`

export const TdBasic = styled.div`
    width: 10%;
    text-align: center;
`
export const TdTitle = styled.div`
    width: 70%;
    text-align: center;
    cursor: pointer;

    :hover {
    color: blue;
    }
`
export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 50px;
`
export const Pencil = styled.img`
`
export const Button = styled.button`
    width: 171px;
    height: 52px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f5f2fc;
    }
`
