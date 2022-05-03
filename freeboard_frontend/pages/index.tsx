import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  position: relative;
`;

const My = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  right: 0;
  font-size: 20px;
  font-weight: 300;
  position: absolute;
`;
const MyPage = styled.div`
  margin-right: 30px;
  cursor: pointer;
  z-index: 2;
`;
const LogIn = styled.div`
  padding: 30px;
  margin-right: 30px;
  cursor: pointer;
  z-index: 2;
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
  const router = useRouter();
  const onClickLog = () => {
    router.push("/login");
    console.log("여기");
  };
  const onClickMove = () => {
    router.push("/market");
  };
  const onClickMyPage = () => {
    router.push("/mypage");
  };

  return (
    <>
      <Wrapper>
        <My>
          <MyPage onClick={onClickMyPage}>마이페이지</MyPage>
          <LogIn onClick={onClickLog}>로그인</LogIn>
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
