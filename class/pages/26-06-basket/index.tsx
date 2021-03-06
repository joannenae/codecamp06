import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoard {
    fetchBoards {
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
  width: 25%;
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: any) => () => {
    console.log(el);

    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]"); // 배열 (parse - 객체 또는 배열로 가져옴 )

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id); // 장바구니에 담으려고 클릭한 것과 baskets에서 꺼내온 데이터의 아이디가 같은 것만 필터링하겠다
    if (temp.length === 1) {
      alert("이미 담긴 상품입니다.");
      return; // 종료
    }
    // 장바구니 상품 삭제
    // const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id); 그리고 set

    // 3. 기존 장바구니에 새로 추가해서 담기
    const { __typename, ...newEl } = el; // typename을 rest 파라미터로 지워주기 - 원본 삭제 아님
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets)); // 객체를 텍스트로 바꿔서 넣어줘야함
  };

  return (
    <>
      {/* el을 로컬스토리지에 담기 */}
      {data?.fetchBoards.map(
        (
          el: IBoard // IBoard는 fetchboard로 받아온 데이터의 타입
        ) => (
          <MyRow key={el._id}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <button onClick={onClickBasket(el)}>장바구니 담기</button>
          </MyRow>
        )
      )}
    </>
  );
}
// 07-02에서 가져옴
