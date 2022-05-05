import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 50px auto;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  /* box-shadow: 0px 0px 10px gray; */
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;
export const CreatedAt = styled.div``;
export const Body = styled.div``;

export const Topbox = styled.div`
  display: flex;
  /* border: 1px solid red; */
  margin-top: 50px;
`;
export const ImageBox = styled.div`
  width: 480px;
  height: 480px;
`;
export const DetailImg = styled.img`
  width: 480px;
  height: 480px;
  object-fit: contain;
`;
export const TopIn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;
export const DetailCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 10px;
  /* border: 2px solid blue; */
`;
export const Edit = styled.div`
  display: flex;
  align-items: center;
`;
export const Name = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
`;
export const Price = styled.div`
  height: 70px;
  font-size: 25px;
  border-bottom: 2px solid black;
  font-weight: 500;
  padding: 10px;
`;
export const Remark = styled.div`
  height: 70px;
  font-size: 18px;
  margin: 20px;
`;
export const Tag = styled.div`
  border-radius: 5px;
  text-align: center;
  /* background-color: #ffe004; */
  margin: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
`;
export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
  color: white;
  font-size: 17px;
`;
export const Pick = styled.div`
  width: 120px;
  height: 60px;
  line-height: 3.5;
  background-color: lightgray;
  text-align: center;
`;
export const Basket = styled.div`
  width: 140px;
  height: 60px;
  line-height: 3.5;
  background-color: gray;
  text-align: center;
  margin-left: 20px;
`;
export const Buy = styled.div`
  width: 160px;
  height: 60px;
  line-height: 3.5;
  background-color: #585858;
  text-align: center;
  margin-left: 20px;
`;
// 아래 컨테이너 전체박스
export const Container = styled.div`
  display: flex;
`;
//왼쫃
export const Left = styled.div`
  width: 60%;
  margin-top: 30px;
`;
export const PriceInfo = styled.div`
  height: 45px;
  font-size: 20px;
  border-bottom: 2px solid black;
  font-weight: 600;
`;
export const Contents = styled.div`
  margin: 15px;
  /* height: 60px; */
`;
export const Place = styled.div`
  margin: 20px;
  font-size: 17px;
`;
export const Location = styled.img`
  width: 18px;
  margin-right: 10px;
`;
export const Map = styled.div`
  height: 100px;
  margin: 20px;
`;

export const Right = styled.div`
  /* width: 25%; */
  margin-top: 30px;
  margin-left: 120px;
`;
export const MarketInfo = styled.div`
  height: 45px;
  font-size: 20px;
  border-bottom: 2px solid black;
  font-weight: 600;
`;
export const Username = styled.div`
  height: 70px;
  line-height: 5;
  border-bottom: 1px solid gray;
`;
export const Comments = styled.div`
  height: 70px;
  line-height: 4;
  border-bottom: 1px solid gray;
  font-size: 20px;
  font-weight: 600;
`;
export const CommentArea = styled.div`
  /* height: 70px;
  background-color: gainsboro;
  margin: 10px; */
`;
export const CommentBtn = styled.div`
  width: 70px;
  height: 40px;
  text-align: center;
  line-height: 2;
  margin-left: 295px;
  background-color: #ffe004;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`;

export const ButtonGo = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;
