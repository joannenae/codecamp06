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
  width: 600px;
  height: 600px;
  margin: 0 auto;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Div>
        <Slider {...settings}>
          <div>
            <h3>
              <img src="/1.jpeg" alt="" width="300px" />
            </h3>
          </div>
          <div>
            <h3>
              {" "}
              <img src="/2.jpeg" alt="" width="300px" />
            </h3>
          </div>
          <div>
            <h3>
              {" "}
              <img src="/3.jpeg" alt="" width="300px" />
            </h3>
          </div>
          <div>
            <h3>
              {" "}
              <img src="/4.jpeg" alt="" width="300px" />
            </h3>
          </div>
        </Slider>
      </Div>
    </Wrapper>
  );
}
