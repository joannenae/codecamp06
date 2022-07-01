import styled from "@emotion/styled";

const Idiv = styled.div`
  display: flex;
  justify-content: center;
  animation: shakey 1s infinite;
  @keyframes shakey {
    0% {
      transform: rotate(2deg);
    }

    5% {
      transform: rotate(4deg);
    }

    10% {
      transform: rotate(6deg);
    }

    15% {
      transform: rotate(8deg);
    }

    20% {
      transform: rotate(10deg);
    }

    25% {
      transform: rotate(8deg);
    }

    30% {
      transform: rotate(6deg);
    }

    35% {
      transform: rotate(4deg);
    }

    40% {
      transform: rotate(2deg);
    }

    45% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(-2deg);
    }

    55% {
      transform: rotate(-4deg);
    }

    60% {
      transform: rotate(-6deg);
    }

    65% {
      transform: rotate(-8deg);
    }

    70% {
      transform: rotate(-10deg);
    }

    75% {
      transform: rotate(-8deg);
    }

    80% {
      transform: rotate(-6deg);
    }

    85% {
      transform: rotate(-4deg);
    }

    90% {
      transform: rotate(-2deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

const Img = styled.img`
  width: 400px;
`;

export default function Animation() {
  return (
    <Idiv>
      <Img src="/slipper.png" />
    </Idiv>
  );
}
