import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 500px;
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
  width: 1200px;
`;
const Pbox = styled.div`
  /* width: 900px; */
  height: 460px;
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
    cssEase: "linear",
  };
  return (
    <Wrapper>
      <Div>
        <Slider {...settings}>
          <Pbox>
            <h3>
              <Img src="/11.jpeg" alt="" />
            </h3>
          </Pbox>
          <Pbox>
            <h3>
              <Img src="/12.jpeg" alt="" />
            </h3>
          </Pbox>
          <Pbox>
            <h3>
              <Img src="/13.jpeg" alt="" />
            </h3>
          </Pbox>
          <Pbox>
            <h3>
              <Img src="/14.jpeg" alt="" />
            </h3>
          </Pbox>
          <Pbox>
            <h3>
              <Img src="/15.jpeg" alt="" />
            </h3>
          </Pbox>
          <Pbox>
            <h3>
              <Img src="/16.jpeg" alt="" />
            </h3>
          </Pbox>
        </Slider>
      </Div>
    </Wrapper>
  );
}
