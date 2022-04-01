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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const MyRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MyColumn = styled.div`
  /* width: 50%; */
`;
const Span = styled.button`
  width 100%;
`;
const SpanBox = styled.div`
  justify-content: space-between;
  display: flex;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
`;
const Pages = styled.span`
  color: ${(props: any) => (props.isCurrent ? "orange" : "black")};
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    setCurrent(Number(event.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
    setCurrent(Number(startPage - 10));
  };
  const onClickNextPage = () => {
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
    setCurrent(Number(startPage + 10));
  };
  //  startPage <= lastPage
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <SpanBox>
        <Span
          onClick={onClickPrevPage}
          disabled={startPage === 1 ? true : false}
        >
          {"<"}
        </Span>
        {/* 페이지 이동  */}
        {new Array(10).fill(1).map(
          (_, index) =>
            index + startPage <= lastPage && (
              <Pages
                key={index + startPage}
                onClick={onClickPage}
                id={String(index + startPage)}
                isCurrent={startPage + index === current}
              >
                {` `} {index + startPage}
              </Pages>
            )
        )}
        <Span
          onClick={onClickNextPage}
          disabled={startPage + 10 > lastPage ? true : false}
        >
          {">"}
        </Span>
      </SpanBox>
    </>
  );
}
