import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  /* width: 25%; */
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
  };
  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {/* 페이지 이동  */}
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage}
          onClick={onClickPage}
          id={String(index + startPage)}
        >
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음 페이지</span>

      {/* {[1, 2, 3, 4, 5].map((el) => (
        <span key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </span>
      ))} */}
      {/* <span onClick={onClickPage} id="1">
        1
      </span>
      <span onClick={onClickPage} id="2">
        2
      </span>
      <span onClick={onClickPage} id="3">
        3
      </span> */}
    </>
  );
}
