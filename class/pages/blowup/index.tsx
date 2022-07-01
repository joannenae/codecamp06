import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const blowUpModal = keyframes`
    0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }
`;
const blowUpContent = keyframes`
    0% {
    transform:scale(1);
    opacity:1;
  }
  99.9% {
    transform:scale(2);
    opacity:0;
  }
  100% {
    transform:scale(0);
  }
`;
const blowUpModalTwo = keyframes`
  0% {
    transform:scale(1);
    opacity:1;
  }
  100% {
    transform:scale(0);
    opacity:0;
  }
`;
const blowUpContentTwo = keyframes`
  0% {
    transform:scale(2);
    opacity:0;
  }
  100% {
    transform:scale(1);
    opacity:1;
  }
`;

const Out = styled.div`
  width: 100px;
  height: 100px;
  z-index: 0;
  transform: scale(1);
  .modal-background {
    background: rgba(0, 0, 0, 0.7);
    .modal {
      animation: ${blowUpModal} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
  }
  + .content {
    z-index: 1;
    animation: ${blowUpContent} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }
  &.out {
    .modal-background {
      .modal {
        animation: ${blowUpModalTwo} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
      }
    }
    + .content {
      animation: ${blowUpContentTwo} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
        forwards;
    }
  }
`;

export default function BlowUP() {
  const [isOpen, setIsOpen] = useState(true);

  const onClickButton = () => {
    setIsOpen(false);
  };

  return <>{isOpen ? <Out onClick={onClickButton}>버튼</Out> : <div></div>}</>;
}
