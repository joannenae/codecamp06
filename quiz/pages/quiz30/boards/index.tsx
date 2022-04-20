import { gql, useQuery } from "@apollo/client";
import BasketItem from "./BasketItem.container";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const Wrapper = styled.div``;
const Header = styled.div`
  display: flex;
  /* justify-content: space-around; */
  width: 100%;
  text-align: center;
  border-bottom: 1px solid gray;
  font-weight: 700;
`;
const TitleLabel = styled.div`
  width: 30%;
`;
const WriterLabel = styled.div`
  width: 30%;
`;
const ContentLabel = styled.div`
  width: 30%;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <Wrapper>
      <Header>
        <TitleLabel>제목</TitleLabel>
        <WriterLabel>작성자</WriterLabel>
        <ContentLabel>내용</ContentLabel>
        <ContentLabel></ContentLabel>
        {/* <WriterLabel></WriterLabel> */}
      </Header>
      {data?.fetchBoards.map((el: IBoard) => (
        <BasketItem key={uuidv4()} el={el} />
      ))}
    </Wrapper>
  );
}
