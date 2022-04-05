import { IBoardListUIProps } from "./BoardList.types";
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
  Pencil,
  PencilBox,
} from "./BoardList.styles";
import Pagination from "../../../commons/layout/pagination/Pagination.Container";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardListUI(props: IBoardListUIProps) {
  console.log(props.data?.fetchBoards._id);
  return (
    <>
      <Wrapper>
        <TableTop />
        <RowTitle>
          <ColumnHeader>번호</ColumnHeader>
          <ColumnHeaderTitle>제목</ColumnHeaderTitle>
          <ColumnHeader>작성자</ColumnHeader>
          <ColumnHeader>날짜</ColumnHeader>
        </RowTitle>
        {props.data?.fetchBoards.map((el, index: any) => (
          <Row key={el._id}>
            <TdBasic>{props.data.fetchBoards.length - index}</TdBasic>
            <TdTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title}
            </TdTitle>
            <TdBasic>{el.writer}</TdBasic>
            <TdBasic>{getDate(el.createdAt)}</TdBasic>
          </Row>
        ))}
        <TableBottom />
        <Footer>
          <Pagination refetch={props.refetch} count={props.count} />
          <PencilBox>
            <Button onClick={props.onClickMoveToBoardNew}>
              <Pencil src="/plus.png" />
            </Button>
          </PencilBox>
        </Footer>
      </Wrapper>
    </>
  );
}
