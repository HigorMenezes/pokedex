import { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-color: rgba(0,0,0,0.1);
  }
  50% {
    background-color: rgba(0,0,0,0.2);
  }
  100% {
    background-color: rgba(0,0,0,0.1);
  }
`;

export default loadingAnimation;
