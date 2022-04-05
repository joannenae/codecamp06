import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 100px;
  background-color: #f8efe8;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Nav = styled.div`
  width: 200px;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  /* border-right: 2px solid gray; */
  color: gray;
`;

export default function LayoutNavigation() {
  return (
    <Wrapper>
      <Nav style={{ color: "black" }}>자유게시판</Nav>
      <Nav>중고마켓</Nav>
      <Nav>마이페이지</Nav>
    </Wrapper>
  );
}
