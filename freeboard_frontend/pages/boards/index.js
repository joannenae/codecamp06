import {useQuery, gql, useMutation} from '@apollo/client'
import styled from '@emotion/styled' 

const FETCH_BOARDS = gql`
query {
    fetchBoards{
        _id
        writer
        title
        createdAt
    }
}
`
const Wrapper = styled.div`
    width: 1200px;
    margin : 0 auto;
`
const Table = styled.table`
    width : 100%;
`
const RowTitle = styled.tr`
    display : flex;
    line-height : 35px;
    align-items : center;
    border-bottom : 1px solid lightgray;
    width : 80%;

`
const Row = styled.tr`
    display : flex;
    line-height : 35px;
    align-items : center;

`
const Column = styled.th`
    width : 25%;
`
const Td = styled.td`
    width : 20%;
    text-align : center;
    color : gray;
    height : 40px;
    border-bottom : 1px solid lightgray;
`
const Button = styled.button`
    width : 100px;
    border : 1px solid gray;
`



export default function MapProductPage(){
    const { data } = useQuery(FETCH_BOARDS)

    return (
        <>
            <Wrapper>
                <Table>
                    <RowTitle>
                        <Column>번호</Column>
                        <Column>제목</Column>
                        <Column>작성자</Column>
                        <Column>날짜</Column>
                    </RowTitle>
                    {data?.fetchBoards.map((el,index) => (
                        <Row>
                            <Td>{index + 1}</Td>
                            <Td>{el.title}</Td>
                            <Td>{el.writer}</Td>
                            <Td>{el.createdAt.slice(0,10)}</Td>
                        </Row>
                    ))}
                </Table>
                <Button>게시물 등록</Button>
            </Wrapper>
                {/* {data?.fetchBoards.map((el,index) => (
                    <Row key={el._id}>
                        <Column>{index + 1}</Column>
                        <Column>{el.title}</Column>
                        <Column>{el.writer}</Column>
                        <Column>{el.createdAt.slice(0,10)}</Column>
                    </Row>
                ))} */}
        </>
    )
}