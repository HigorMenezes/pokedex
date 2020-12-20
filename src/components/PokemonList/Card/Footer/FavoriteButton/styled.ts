import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const Root = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;

  transition: background-color var(--transition-duration-time);

  &:hover {
    background-color: var(--heart-color-hover);
  }

  &:focus {
    outline: var(--outline-style);
  }
`;

export const FavoriteIcon = styled(FaHeart)`
  width: 24px;
  height: 24px;
  color: var(--heart-color);
`;

export const UnFavoriteIcon = styled(FaRegHeart)`
  width: 24px;
  height: 24px;
  color: var(--heart-color);
`;
