import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";
import QuizToday from "./BasketToday.container";

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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const FetchBoardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

const Col = styled.div`
  width: 25%;
`;

// today 부분
const TodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-left: 20px;
`;

const TodayRow = styled.div`
  display: flex;
  width: 200px;
`;

const TodayCol = styled.div`
  width: 200px;
`;

export default function QuizTodayPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const getDate = () => {
    const newdate = new Date();
    const yyyy = newdate.getFullYear();
    const mm = newdate.getMonth() + 1;
    const dd = newdate.getDate();
    return `${yyyy}-${String(mm).padStart(2, "0")}-${String(dd).padStart(
      2,
      "0"
    )}`;
  };
  // today 친구들 불러오자
  const [todayItems, setTodayItems] = useState([]);
  const [changeToday, setChangeToday] = useState(true);

  useEffect(() => {
    const today = getDate();
    const baskets = JSON.parse(localStorage.getItem(today) || "[]");
    setTodayItems(baskets);
  }, [changeToday]); // useEffect에서 함수 뒤에 ,[]이 있으면  렌더링 된 후 단 한 번만 실행되고 다시 실해되기 않는다 그러나 []안에 지정해주면 지정된 변수의 값이 변했을 때만 실행하게 된다.

  return (
    <Wrapper>
      <FetchBoardsWrapper>
        <HeaderRow>
          <Col>작성자</Col>
          <Col>제목</Col>
          <Col>내용</Col>
          <Col></Col>
        </HeaderRow>
        {data?.fetchBoards.map((el: IBoard) => (
          <QuizToday
            data={data}
            el={el}
            key={el._id}
            setChangeToday={setChangeToday}
          />
        ))}
      </FetchBoardsWrapper>
      <TodayWrapper>
        <TodayRow>
          <TodayCol>작성자</TodayCol>
          <TodayCol>제목</TodayCol>
          <TodayCol>내용</TodayCol>
        </TodayRow>
        {todayItems.map((el: IBoard) => (
          <TodayRow key={el._id}>
            <TodayCol>{el.writer}</TodayCol>
            <TodayCol>{el.title}</TodayCol>
            <TodayCol>{el.contents}</TodayCol>
          </TodayRow>
        ))}
      </TodayWrapper>
    </Wrapper>
  );
}
