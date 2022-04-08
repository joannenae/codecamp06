import useRouter from "next/router";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
`;

const My = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  right: 0;
  font-size: 24px;
  font-weight: 300;
  margin-top: 20px;
  margin-right: 20px;
`;
const MyPage = styled.span`
  margin-right: 30px;
  cursor: pointer;
`;
const LogIn = styled.span`
  padding: 30px;
  margin-right: 30px;
  cursor: pointer;
`;

const DivBox = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 50%;
  height: 100%;
`;
const Video = styled.video`
  width: 50%;
  height: 100%;
`;
const Footer = styled.div`
  height: 200px;
  width: 100%;
  text-align: center;
  padding-top: 100px;
`;
const Span = styled.span`
  font-size: 17px;
  color: gray;
  font-weight: 350;
`;
const Button = styled.div`
  width: 300px;
  height: 100px;
  font-size: 40px;
  position: absolute;
  top: 80%;
  left: 50%;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translate(-50%, 50%);
  padding: 20px;
  font-weight: 300;
  /* transition-property: background-color; */
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.5s ease-out;
    color: white;
  }
`;
export default function Home() {
  const router = useRouter;
  const onClickMove = () => {
    router.push("/boards");
  };

  return (
    <>
      <Wrapper>
        <My>
          <MyPage>마이페이지</MyPage>
          <LogIn>로그인</LogIn>
        </My>
        <DivBox>
          <Img src="/main.webp"></Img>
          <Video src="/main02.mp4" muted autoPlay loop></Video>
        </DivBox>
        <Button onClick={onClickMove}> G O ▶︎ </Button>
      </Wrapper>
      <Footer>
        <Span>
          {" "}
          코드캠프-프론트엔드6기 | 내승현 | 서울특별시 구로구 구로동 188-25
          지밸리비즈플라자 13층 | 010-2889-0248 | 이메일:
          joannenaedevelop@gmail.com
        </Span>
      </Footer>
    </>
  );
}
