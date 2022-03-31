import styled from "@emotion/styled";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 500px;
  background-color: white;
`;
const Div = styled.div`
  width: 900px;
  height: 450px;
  margin: 0 auto;
`;
const Pbox = styled.div`
  width: 900px;
  height: 460px;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Div>
        <Slider {...settings}>
          <Pbox>
            <h3>
              <img src="/11.jpeg" alt="" width="900px" height="900px" />
            </h3>
          </Pbox>
          <Pbox>
            <h3>
              <img src="/12.jpeg" alt="" width="900px" height="900px" />
            </h3>
          </Pbox>
          <Pbox>
            <h3>
              <img src="/13.jpeg" alt="" width="900px" height="900px" />
            </h3>
          </Pbox>
        </Slider>
      </Div>
    </Wrapper>
  );
}
