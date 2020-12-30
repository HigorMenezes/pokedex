import { memo } from "react";
import { Root, UnFavoriteIcon, FavoriteIcon } from "./styled";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

function FavoriteButton({
  isFavorite,
  onClick,
}: FavoriteButtonProps): JSX.Element {
  return (
    <Root onClick={onClick}>
      {isFavorite ? <FavoriteIcon /> : <UnFavoriteIcon />}
    </Root>
  );
}

export default memo(FavoriteButton);
