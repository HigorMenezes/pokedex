import styled, { css } from "styled-components";
import loadingAnimation from "../../../../styles/loadingAnimation";

export const Root = styled.header`
  width: 100%;
  padding: 16px;
  padding-bottom: 0px;
`;

const TitleLoadingCss = css`
  height: 2rem;

  animation: ${loadingAnimation} 3s linear infinite;
`;
interface TitleProps {
  loading: boolean;
}

export const Title = styled.h2<TitleProps>`
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 500;

  margin-bottom: 0.35rem;

  text-transform: capitalize;

  ${(props) => props.loading && TitleLoadingCss}
`;
