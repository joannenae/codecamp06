import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./ProductWrite.types";

export const Wr = styled.div`
  width: 1200px;
  box-shadow: 5px 5px 5px 5px lightgray;
  margin: 40px auto;
  /* height: 100%; */
`;
export const WrIn = styled.div`
  width: 85%;
  margin: 0 auto;
`;
export const Header = styled.div`
  color: black;
  text-align: center;
  font-weight: bold;
  padding: 30px;
  font-size: 20px;
`;
export const TopBox = styled.div`
  margin-top: 20px;
`;
export const BoxIn = styled.div``;
export const Text = styled.p`
  color: black;
  font-weight: bold;
  font-size: 11px;
  margin-top: 25px;
`;
export const Title = styled.div`
  margin-top: 30px;
`;
export const Name = styled.input`
  width: 100%;
  font-size: 11px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
export const Online = styled.input`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  height: 30px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
export const Flexbox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const TitlePrice = styled.div`
  width: 500px;
`;
export const TitleTag = styled.div`
  width: 500px;
`;
export const Price = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
export const Tag = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
export const Content = styled.input`
  width: 100%;
  height: 400px;
  font-size: 11px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
export const TextIn = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;
export const ImageBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
`;
export const BoxOne = styled.div`
  width: 100px;
  height: 100px;
  background-color: gainsboro;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;
export const ChooseBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Choose = styled.input`
  margin-bottom: 10px;
  margin-right: 10px;
`;
export const TextChoose = styled.p`
  font-size: 11px;
  margin-right: 20px;
  margin-top: none;
`;
export const SignUp = styled.div`
  width: 100%;
  height: 50px;
  font-size: 11px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  line-height: 30px;
`;
export const Cancel = styled.div`
  width: 130px;
  background-color: gray;
  margin-right: 30px;
  height: 30px;
  border-radius: 5px;
  color: white;

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#ffd600" : "none"};
`;
export const Edit = styled.button`
  width: 130px;
  background-color: none;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: black;
  margin-right: 30px;
`;
export const Error = styled.div`
  color: red;
  font-size: 10px;
  margin-top: 10px;
  padding: 1px;
`;
