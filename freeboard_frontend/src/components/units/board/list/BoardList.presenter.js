// import * as S from "./BoardList.styles";
import { getDate } from '../../../../commons/libraries/utils'
import { 
    Wrapper,
    TableTop,
    TableBottom,
    RowTitle,
    ColumnHeader,
    ColumnHeaderTitle,
    Row,
    TdBasic,
    TdTitle,
    Footer,
    Button,
    Pencil

} from './BoardList.styles'

export default function BoardListUI(props) {

    return (
        <>
            <Wrapper>
                <TableTop />
                    <RowTitle>
                        <ColumnHeader>ID</ColumnHeader>
                        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
                        <ColumnHeader>작성자</ColumnHeader>
                        <ColumnHeader>날짜</ColumnHeader>
                    </RowTitle>
                    {props.data?.fetchBoards.map((el,index) => (
                        <Row key={el._id}>
                            <TdBasic>{String(el._id).slice(-4).toUpperCase()}</TdBasic>
                            <TdTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.title}</TdTitle>
                            <TdBasic>{el.writer}</TdBasic>
                            <TdBasic>{getDate(el.createdAt)}</TdBasic>
                        </Row>
                    ))}
                <TableBottom />
                <Footer>
                    <Button onClick={props.onClickMoveToBoardNew}>
                        <Pencil src="/write.png"/>
                        게시물 등록
                    </Button>
                </Footer>
            </Wrapper>
        </>
    )
}