import styled from "@emotion/styled";
import { useState } from "react";
import { IBoard, IQuery } from "../../../src/commons/types/generated/types";

const Row = styled.div`
  display: flex;
  width: 100%;
`;
const Col = styled.div`
  width: 25%;
`;

const BasketButton = styled.button`
  width: 25%;
`;

interface IProps {
  data?: Pick<IQuery, "fetchBoards">;
  el?: any;
  setChangeToday: (prev: any) => () => void;
}

export default function QuizToday(props: IProps) {
  const [isBasket, setIsBasket] = useState(false);

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

  const onClickBasket = (el: IBoard) => () => {
    const today = getDate();
    const baskets = JSON.parse(localStorage.getItem(today) || "[]");

    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다.");
      setIsBasket(true);
      props.setChangeToday((prev: boolean) => !prev);
      return;
    }
    const { __typename, ...rest } = el;
    baskets.push(rest);
    localStorage.setItem(today, JSON.stringify(baskets));
    setIsBasket(true);
    props.setChangeToday((prev: boolean) => !prev);
  };

  const onClickDeleteBasket = (el: IBoard) => () => {
    const today = getDate();
    const baskets = JSON.parse(localStorage.getItem(today) || "[]");
    const newBaskets = baskets.filter(
      (basketEl: IBoard) => basketEl._id !== el._id
    );
    localStorage.setItem(today, JSON.stringify(newBaskets));
    setIsBasket(false);
    props.setChangeToday((prev: boolean) => !prev);
  };

  return (
    <>
      <Row>
        <Col>{props.el.writer}</Col>
        <Col>{props.el.title}</Col>
        <Col>{props.el.contents}</Col>
        <BasketButton
          onClick={
            isBasket ? onClickDeleteBasket(props.el) : onClickBasket(props.el)
          }
        >
          {isBasket ? "담기 취소" : "게시물 담기"}
        </BasketButton>
      </Row>
    </>
  );
}
