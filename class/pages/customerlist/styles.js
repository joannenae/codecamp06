import styled from "@emotion/styled";

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* margin-top: 10px; */
  margin-top: 75px;
`;
export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 15px;
  height: 50px;
  list-style: none;
  text-align: center;
  color: #254370;
  font-weight: 600;
`;

export const ListContent = styled.div`
  margin-bottom: 70px;
`;
export const WalletList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  list-style: none;
  cursor: pointer;
  text-align: center;
  :hover {
    color: #366cc4;
  }
`;

export const Name = styled.li`
  width: 20%;
`;
export const Num = styled.li`
  width: 20%;
`;
export const GreenPoint = styled.li`
  width: 15%;
`;
export const NFT = styled.li`
  width: 15%;
`;
export const Status = styled.li`
  width: 10%;
`;
export const Own = styled.li`
  width: 10%;
`;
export const Date = styled.li`
  width: 20%;
`;
// 지갑 일괄 생성
export const CustomHeader = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CustomerTitle = styled.span`
  font-size: 20px;
  color: #254370;
  font-weight: bold;
`;
export const SelectBox = styled.div`
  margin-left: 40%;
  display: flex;
`;
