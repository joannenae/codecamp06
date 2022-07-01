import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const fadeInDown = keyframes`
    0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;
export const fadein = keyframes`
  from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;
const DivOut = styled.div``;
const DivBox = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  animation: ${fadein} 2s;
`;
const Div = styled.div`
  width: 100%;
`;
const Box = styled.div`
  height: 100vh;
`;
const Img1 = styled.div`
  font-size: 30px;
`;
const Img2 = styled.div`
  font-size: 30px;
  text-align: center;
`;
const Img3 = styled.div`
  width: 740px;
  font-size: 30px;
  text-align: center;
`;

const Pbox1 = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f4f4f4;
`;
const Image = styled.img`
  width: 290px;
  /* height: 300px; */
  display: flex;
  justify-content: flex-end;
`;
const Pbox2 = styled.div`
  height: 100%;
`;
const Pbox3 = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const show = keyframes`
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}

`;

const Txt = styled.div`
  margin-bottom: 15px;
  margin-top: 25px;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
`;

const Img = styled.img``;
const LastImage = styled.img`
  margin-left: 100px;
`;

const ImgBox1 = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ff9f40;
  :hover {
    span {
      opacity: 1;
    }
    /* filter: blur(5px);
    transition: 0.3s ease-in-out; */
    filter: opacity(0.7);
    transition: 0.3s ease-in-out;
  }
  cursor: pointer;
`;
const ImgBox2 = styled.div`
  width: 500px;
  margin: 0 auto;
  background-color: #42c58a;
  margin-top: 50px;
  backface-visibility: hidden;
  :hover {
    span {
      opacity: 1;
    }
    /* filter: blur(5px);
    transition: 0.3s ease-in-out; */
    filter: opacity(0.7);
    transition: 0.3s ease-in-out;
  }
  cursor: pointer;
`;
const ImgBox3 = styled.div`
  width: 700px;
  background-color: #ff7ca8;
  :hover {
    span {
      opacity: 1;
    }
    /* filter: blur(5px);
    transition: 0.3s ease-in-out; */
    filter: opacity(0.7);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const Middle = styled.span`
  transition: 0.3s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;
const MiddleText = styled.div`
  background-color: #fff;
  color: black;
  font-weight: 700;
  font-size: 16px;
  padding: 16px 32px;
  cursor: pointer;
`;

export default function LayoutBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <DivOut>
      <DivBox>
        <Wrapper>
          <Div>
            <Box>
              <Pbox2>
                <TBox>
                  <Txt>한 눈에 알아볼 수 있는 slipper 처음이세요? </Txt>
                  <Img2>슬리퍼만 있으면 어디든 갈 수 있어요!</Img2>
                </TBox>
                <ImgBox2 data-aos="fade-up">
                  <Img src="/banner2.png" />
                  <Middle>
                    <MiddleText>구경가기</MiddleText>
                  </Middle>
                </ImgBox2>
              </Pbox2>
            </Box>
            <Box>
              <Pbox1>
                <ImgBox1 data-aos="fade-right">
                  <Img src="/banner1.png" />
                  <Middle>
                    <MiddleText>함께 공유해요!</MiddleText>
                  </Middle>
                </ImgBox1>
                <TBox>
                  <Image data-aos="fade-left" src="/landingcafe.jpeg" />
                  <Txt>슬리퍼가 여러분과 함께합니다.</Txt>
                  <Img1>야 , 너도 슬리퍼 신어볼래?</Img1>
                </TBox>
              </Pbox1>
            </Box>
            <Box>
              <Pbox3>
                <TBox>
                  <Txt>사장님을 위한 슬리퍼 트렌드 </Txt>
                  <Img3>전국의 모든 사장님들 슬리퍼를 신어보세요. </Img3>
                </TBox>
                <ImgBox3 data-aos="fade-left">
                  <LastImage src="/banner3.png" />
                  <Middle>
                    <MiddleText>사장님 가게 알리기</MiddleText>
                  </Middle>
                </ImgBox3>
              </Pbox3>
            </Box>
          </Div>
        </Wrapper>
      </DivBox>
    </DivOut>
  );
}
