import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 905px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  border-color: #545454;
`;
export const Header = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #c9c9c9;
  margin-bottom: 100px;
`;
export const KoLogin = styled.div`
  font-size: 50px;
  font-weight: 700;
  padding: 10px;
`;
export const EnLogin = styled.div`
  font-weight: 400;
  font-size: 32px;
`;
export const Label = styled.div`
  width: 250px;
  font-size: 24px;
`;
export const Input = styled.input`
  width: 600px;
  height: 78px;
  background: #f6f6f6;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
`;
export const InputEr = styled.div`
  width: 600px;
  height: 70px;
  font-size: 16px;
  color: red;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Btn = styled.button`
  width: 300px;
  height: 78px;
  background: #ffe004;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  padding: 20px;
  cursor: pointer;
`;
export const Cancle = styled.button`
  width: 300px;
  height: 78px;
  background: black;
  color: white;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
  cursor: pointer;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Que = styled.div`
  font-size: 18px;
  color: #888888;
  padding: 20px;
`;
export const Sing = styled.div`
  font-size: 18px;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid black;
  }
`;
