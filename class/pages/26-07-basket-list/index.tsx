import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const [basketItems, setBasketItems] = useState([]); // map 으로 뿌리기

  // useEffect 를 쓰지 않으면 localstorage에서 몾찾음 - 장바구니에 담긴 목록보기
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);
  return (
    <>
      {/* el을 로컬스토리지에 담기 */}
      {basketItems.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </>
  );
}
// 07-02에서 가져옴
