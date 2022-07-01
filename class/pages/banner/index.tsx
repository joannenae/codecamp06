import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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
const TextBox = styled.div`
  position: absolute;
  top: 35%;
  right: 25%;
  transform: translate(50%, -80%);
  color: black;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: bold;
  padding-top: 200px;
  bottom: 45%;
  display: block;
`;
const TextIn = styled.div`
  height: 50px;
  overflow: hidden;
  text-align: center;
`;
const TextO = styled.div`
  animation: ${show} 5s linear infinite;
`;
const TextOut = styled.div``;
const TextFirst = styled.div`
  color: #42c58a;
  // padding:4px 12px;
  height: 45px;
  margin-bottom: 45px;
  display: inline-block;
  font-size: 3.3rem;
`;
const TextSecond = styled.div`
  color: #4ec7f3;
  // padding:4px 12px;
  height: 45px;
  margin-bottom: 45px;
  display: inline-block;
  font-size: 3.3rem;
`;
const TextLast = styled.div`
  color: #dc143c;
  // padding:4px 12px;
  height: 45px;
  margin-bottom: 45px;
  display: inline-block;
  font-size: 3.3rem;
`;

const Hi = styled.div`
  font-size: 40px;
`;

export default function Banner() {
  return (
    <>
      <TextBox>
        슬리퍼가 대신 다녀올게
        <TextIn>
          <TextO>
            <TextFirst>
              {" "}
              <Hi>어느 동네든! </Hi>
            </TextFirst>
          </TextO>
          <TextOut>
            <TextSecond>
              <Hi>어느 곳이든! </Hi>
            </TextSecond>
          </TextOut>
          <TextOut>
            <TextLast>
              <Hi>함께해요! </Hi>
            </TextLast>
          </TextOut>
        </TextIn>
      </TextBox>
    </>
  );
}
