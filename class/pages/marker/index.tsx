import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const go = keyframes`
          0% {
            
            transform: translate3d(-100%, 0, 0);
        }
        100% {
            
            transform: translate3d(100%, 0, 0);
        }
`;
const Div = styled.div`
  animation: ${go} 20s 4s ease-in-out infinite;
`;
const Img = styled.img`
  width: 100px;
`;
export default function Ma() {
  return (
    <Div>
      <Img src="https://media.giphy.com/media/M650kXaCXjupBYNY7M/giphy.gif"></Img>
    </Div>
  );
}
