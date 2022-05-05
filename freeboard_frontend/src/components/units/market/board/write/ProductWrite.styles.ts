import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./ProductWrite.types";

export const Wr = styled.div`
  width: 1200px;
  margin: 40px auto;
`;
export const WrIn = styled.div`
  width: 85%;
  margin: 0 auto;
  border-bottom: 1px solid black;
`;
export const Header = styled.div`
  color: black;
  text-align: start;
  font-weight: bold;
  padding: 40px 30px 30px 0px;
  font-size: 30px;
  border-bottom: 1px solid black;
`;
export const TopBox = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;
export const BoxIn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
`;
export const Map = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.div`
  width: 100px;
  color: black;
  font-weight: bold;
  font-size: 11px;
  margin-top: 10px;
`;
export const Title = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;
export const Name = styled.input`
  width: 100%;
  font-size: 11px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #e9e9e9;
`;
export const AddressBox = styled.div`
  margin-left: 50px;
  margin-top: 50px; ;
`;
export const Location = styled.div``;
export const LocationIcon = styled.img``;
export const Address = styled.input`
  border: 1px solid lightgray;
  width: 80px;
  height: 50px;
`;
export const Search = styled.button`
  width: 130px;
  height: 50px;
  display: inline-block;
  background-color: black;
  color: white;
  border: none;
  font-size: 11px;
  margin-left: 20px;
  border: 1px solid lightgray;
`;
export const Writer = styled.input`
  width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  height: 30px;
  margin-top: 20px;
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
  border: none;
  background-color: #e9e9e9;
`;
export const TitlePrice = styled.div`
  display: flex;
  margin-top: 70px;
  align-items: center;
`;
export const TitleTag = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;
export const Price = styled.input`
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: #e9e9e9;
`;
export const Tag = styled.input`
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: #e9e9e9;
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
export const Delete = styled.div`
  width: 130px;
  background-color: #ffe004;
  margin-right: 30px;
  height: 30px;
  border-radius: 5px;
  color: black;
  margin-top: 100px;
`;
export const Cancel = styled.div`
  width: 130px;
  background-color: black;
  margin-right: 30px;
  height: 30px;
  border-radius: 5px;
  color: white;
  margin-top: 100px;

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
