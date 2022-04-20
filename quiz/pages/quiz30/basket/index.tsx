import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  width: 30%;
`;
const TodayRow = styled.div`
  display: flex;
`;
const TodayCol = styled.div`
  width: 30%;
`;

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);
  return (
    <>
      <TodayRow>
        <TodayCol>작성자</TodayCol>
        <TodayCol>제목</TodayCol>
        <TodayCol>내용</TodayCol>
      </TodayRow>
      {/* el을 로컬스토리지에 담기 */}
      {basketItems.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.contents}</MyColumn>
        </MyRow>
      ))}
    </>
  );
}
