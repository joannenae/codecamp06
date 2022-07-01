import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "@emotion/styled";

const ImageBox = styled.div`
  width: 40%;
  height: 40%;
  filter: blur(0);
  :hover {
    filter: blur(3px);
    transition: 0.3s ease-in-out;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Index = () => {
  let boxStyle = {
    width: "40%",
    height: "200px",
    fontSize: "30px",
    lineHeight: "200px",
    background: "black",
    color: "white",
    textAlign: "center",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <div>
        <div>
          <p data-aos="fade-up">AOS 테스트1</p>
        </div>

        <div style={{ height: "500px" }}></div>
        <div style={boxStyle}>
          <p data-aos="fade-up">AOS 테스트2</p>
        </div>

        <div style={{ height: "500px" }}></div>
        <div style={boxStyle} data-aos="zoom-in-left">
          <p>이거슨 개쩌는 라이브러리3</p>
        </div>

        <div style={{ height: "500px" }}></div>
        <ImageBox data-aos="zoom-in-left">
          <Img src="/logo.png" />
        </ImageBox>
      </div>
    </>
  );
};

export default Index;
