import styled, { css } from "styled-components";
import loadingAnimation from "../../../../styles/loadingAnimation";

export const Root = styled.div`
  width: 100%;
  padding: 16px;
  padding-top: 0px;
`;

const TextLoadingCss = css`
  height: calc(1.25rem * 3);

  animation: ${loadingAnimation} 3s linear infinite;
`;
interface TextProps {
  loading: boolean;
}

export const Text = styled.p<TextProps>`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.018em;
  opacity: 0.6;
  text-align: justify;

  ${(props) => props.loading && TextLoadingCss}
`;
