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
  TextToken,
} from "./BoardList.styles";
import Pagination from "../../../commons/layout/pagination/Pagination.Container";
import { getDate } from "../../../../commons/libraries/utils";
import Searchbar from "../../../commons/searchbar/Searchbar.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <Wrapper>
        <Searchbar
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
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
              {el.title
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </TextToken>
                ))}
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
