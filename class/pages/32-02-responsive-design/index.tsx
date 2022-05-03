import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 62.5rem; //1000px; - 한번에 전체적인 크기 조정 가능
  height: 1000px;
  background-color: beige;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: blue;
  }
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: brown;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
