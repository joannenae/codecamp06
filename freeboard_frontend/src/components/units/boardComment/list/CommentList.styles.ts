import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
`;
export const List = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px 10px 10px 0px;
`;
export const WrapperTop = styled.div`
  width: 100%;
  padding-left: 20px;
`;
export const WriterWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-right: 20px;
`;
export const Contents = styled.div`
  font-size: 15px;
  padding-top: 5px;
`;
export const Option = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Update = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 20px;
`;
export const Delete = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Date = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 70px;
`;
export const Star = styled(Rate)``;
