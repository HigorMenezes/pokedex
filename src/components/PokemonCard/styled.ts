import styled from "styled-components";

export const Root = styled.article`
  width: 280px;

  border-radius: 5px;

  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Header = styled.header`
  width: 100%;
  padding: 10px;
`;

interface PictureInterface {
  src: string;
}
export const Picture = styled.div<PictureInterface>`
  width: 100%;
  height: 0;
  padding-top: 60%;
  background-color: rgba(0, 0, 0, 0.1);
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  image-rendering: pixelated;
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 10px;
`;
