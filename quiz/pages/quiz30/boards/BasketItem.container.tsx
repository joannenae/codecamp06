import { IBoard } from "../../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styled from "@emotion/styled";

const Item = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  /* margin: 10px; */
  justify-content: space-around;
`;
const Title = styled.div`
  width: 30%;
`;
const Writer = styled.div`
  width: 30%;
`;
const Button = styled.div`
  width: 30%;
  cursor: pointer;
  background-color: aliceblue;
`;

interface IProps {
  el: IBoard;
}
export default function BasketItem(props: IProps) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickAdd = (el: IBoard) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const temp = basket.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      setIsAdded(true);
      alert("이미 담긴 게시글입니다.");
      return;
    }
    const { __typename, ...rest } = el;
    basket.push(rest);
    localStorage.setItem("basket", JSON.stringify(basket));
    setIsAdded(true);
  };

  const onClickDelete = (el: IBoard) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const temp = basket.filter((basketEl: IBoard) => basketEl._id !== el._id);
    localStorage.setItem("basket", JSON.stringify(temp));
    setIsAdded(false);
  };

  return (
    <Item key={uuidv4()}>
      <Title>{props.el.title}</Title>
      <Writer>{props.el.writer}</Writer>
      <Writer>{props.el.contents}</Writer>
      <Button
        onClick={isAdded ? onClickDelete(props.el) : onClickAdd(props.el)}
      >
        {isAdded ? "담기 취소" : "게시물 담기"}
      </Button>
    </Item>
  );
}
