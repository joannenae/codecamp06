import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 40vh;
  background-color: white;
  /* width: 1920px; */
  /* margin: 0 auto; */
`;
const Div = styled.div`
  /* width: 900px;
  height: 450px;
  margin: 0 auto; */
  /* width: 1920px; */
`;
const Img = styled.img`
  /* width: 1200px; */
  height: 40vh;
  object-fit: contain;
`;
const Pbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100%;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    //  cssEase: "linear",
  };
  return (
    <Wrapper>
      <Div>
        <Slider {...settings}>
          <Pbox>
            <Img src="/11.jpeg" alt="" />
          </Pbox>
          <Pbox>
            <Img src="/12.jpeg" alt="" />
          </Pbox>
          <Pbox>
            <Img src="/13.jpeg" alt="" />
          </Pbox>
          <Pbox>
            <Img src="/14.jpeg" alt="" />
          </Pbox>
          <Pbox>
            <Img src="/15.jpeg" alt="" />
          </Pbox>
          <Pbox>
            <Img src="/16.jpeg" alt="" />
          </Pbox>
        </Slider>
      </Div>
    </Wrapper>
  );
}
