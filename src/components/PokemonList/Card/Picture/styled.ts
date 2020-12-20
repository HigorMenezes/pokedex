import styled from "styled-components";
import { ReactComponent as PokeballIcon } from "./pokeball.svg";

export const Root = styled.div`
  position: relative;

  width: 100%;
  height: 0;
  padding-top: 100%;
`;

export const PokeballPlaceholder = styled(PokeballIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 95%;
  height: 95%;

  transform: translate(-50%, -50%);

  fill: rgba(0, 0, 0, 0.2);
`;

interface SpriteInterface {
  src: string;
}
export const Sprite = styled.div<SpriteInterface>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.1);
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  image-rendering: pixelated;
`;
