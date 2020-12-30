import { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { RootState } from "../../../../store";
import {
  toggleFavoritePokemon,
  FavoritePokemon,
} from "../../../../store/favoritePokemon";

import FavoriteButton from "./FavoriteButton";

import { Root } from "./styled";

interface FooterProps {
  name: string;
}

function Footer({ name }: FooterProps): JSX.Element {
  const dispatch = useDispatch();
  const favoritePokemons = useSelector<RootState, FavoritePokemon>(
    ({ favoritePokemon }) => favoritePokemon,
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

export default Footer;
