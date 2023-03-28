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
  height: 250px;
  overflow-y: scroll;
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
export const WalletBox = styled.div`
  display: flex;
  justify-content: flex-end;
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

// 지갑 단일 생성

export const Wrapper = styled.div``;
export const MnemonicBtn = styled.button``;
export const ButtonFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Mnemonic = styled.div`
  width: 65%;
  margin: 0 auto;
  height: 100px;
  line-height: 3.3;
  text-align: center;
  padding: 5px;
`;
export const MnemonicBox = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 30px;
`;
export const MnemonicInput = styled.input`
  border: 1px solid gainsboro;
  width: 100%;
  height: 100px;
  padding: 10px;
  text-align: center;
`;
export const Partner = styled.div`
  border: 1px solid gainsboro;
  width: 45%;
  height: 40px;
  padding: 10px;
  text-align: center;
`;
export const Memo = styled.div`
  border: 1px solid gainsboro;
  width: 45%;
  height: 40px;
  text-align: center;
  padding: 10px;
  margin-left: 10%;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const WalletPw = styled.input`
  border: 1px solid gainsboro;
  width: 45%;
  height: 40px;
  padding: 10px;
  margin-top: 30px;
  text-align: center;
`;
export const BlockChain = styled.div``;
export const Check = styled.div`
  margin-top: 30px;
`;
export const PairBox = styled.div`
  display: flex;
  width: 85%;
  height: 80px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid gainsboro;
`;
export const Pair = styled.div`
  width: 17%;
  border-right: 1px solid gainsboro;
  font-size: 15px;
  text-align: center;
  line-height: 5;
`;
export const KeyBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  text-align: center;
`;
export const Public = styled.div`
  border-bottom: 1px solid gainsboro;
  /* line-height: 2.5; */
  height: 35px;
  font-size: 13px;
`;
export const Private = styled.div`
  /* line-height: 2.5; */
  font-size: 13px;
  overflow-y: scroll;
`;
export const MemoBox = styled.div`
  width: 30%;
  margin: 20px 0px 0px 75px;
`;
