import styled from "@emotion/styled";

export const TodayWrapper = styled.div`
  /* width: 20%; */
  /* display: flex; */
  width: 250px;
  height: 600px;
  overflow: auto;
  /* position: fixed; */
  right: 0;
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
  height: 50px;
`;
export const TodayImg = styled.img`
  width: 120px;
  margin-left: 33px;
`;
