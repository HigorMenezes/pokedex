import { useCallback, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { RootState } from "../../../../store";
import {
  toggleFavoritePokemon,
  FavoritePokemons,
} from "../../../../store/slices/favoritePokemons";

import FavoriteButton from "./FavoriteButton";

import { Root } from "./styled";

interface FooterProps {
  name: string;
}

function Footer({ name }: FooterProps): JSX.Element {
  const dispatch = useDispatch();
  const favoritePokemons = useSelector<RootState, FavoritePokemons>(
    ({ favoritePokemons }) => favoritePokemons,
    shallowEqual,
  );

  const handleToggleFavoritePokemon = useCallback(() => {
    dispatch(toggleFavoritePokemon(name));
  }, [dispatch, name]);

  return (
    <Root>
      <FavoriteButton
        isFavorite={favoritePokemons.includes(name)}
        onClick={handleToggleFavoritePokemon}
      />
    </Root>
  );
}

Footer.defaultProps = {
  isFavorite: false,
} as Partial<FooterProps>;

export default memo(Footer);
