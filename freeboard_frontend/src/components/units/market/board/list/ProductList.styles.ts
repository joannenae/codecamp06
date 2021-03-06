import styled from "@emotion/styled";

export const Wr = styled.div``;
export const WrBox = styled.div``;
export const Button = styled.div`
  display: flex;
`;
export const B = styled.div`
  border: none;
  font-size: 18px;
  margin-right: 50px;
  margin-top: 50px;
  :hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
export const Submit = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 10px;
  line-height: 4.5;
  position: fixed;
  bottom: 200px;
  right: 150px;
  z-index: 100;
  font-size: 17px;
  border: 1px solid gray;
  text-align: center;
  :hover {
    font-weight: bold;
  }
`;
export const TodayWrapper = styled.div`
  /* width: 20%; */
  width: 250px;
  height: 600px;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 10px;
  margin-top: 70px;
  margin-right: 10px;
  background-color: white;
  box-shadow: 0px -1px 15px 3px gainsboro;
  z-index: 2;
`;
export const Recent = styled.div`
  /* position: fixed; */
  height: 50px;
  text-align: center;
  line-height: 4;
  font-size: 18px;
  font-weight: 600;
`;
export const TodayRow = styled.div`
  width: 210px;
  box-shadow: 2px 0px 5px 2px gainsboro;
  margin: 0 auto;
  padding: 10px;
  margin: 20px;
`;
export const TodayCol = styled.div`
  text-align: center;
  height: 30px;
`;
export const TodayImg = styled.img`
  width: 120px;
  margin-left: 33px;
`;
