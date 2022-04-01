import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import PaginationUI from "./Pagination.presenter";
// import { IPaginationProps } from "./Pagination.types";

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

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    setCurrent(Number(event.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    setCurrent(Number(startPage - 10));
  };
  const onClickNextPage = () => {
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
    setCurrent(Number(startPage + 10));
  };
  //  startPage <= lastPage
  return (
    <>
      <PaginationUI
        startPage={startPage}
        lastPage={lastPage}
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        current={current}
        refetch={props.refetch}
        data={props.data}
      />
    </>
  );
}
