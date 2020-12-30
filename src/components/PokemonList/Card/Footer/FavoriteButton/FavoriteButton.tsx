import { Root, UnFavoriteIcon, FavoriteIcon } from "./styled";

interface FavoriteButtonProps {
  isFavorite: boolean;
}

function FavoriteButton({ isFavorite }: FavoriteButtonProps): JSX.Element {
  return <Root>{isFavorite ? <FavoriteIcon /> : <UnFavoriteIcon />}</Root>;
}

export default FavoriteButton;
