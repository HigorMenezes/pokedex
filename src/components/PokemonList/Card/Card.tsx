import { useState, useEffect } from "react";

import Picture from "./Picture";
import Header from "./Header";
import Description from "./Description";
import Footer from "./Footer";

import pokedexApi from "../../../services/pokedexApi";

import { Root } from "./styled";

import { SearchDefault, PokemonDetail } from "../../../@types/Pokemon";

interface CardProps {
  pokemon: SearchDefault;
}

function Card({ pokemon }: CardProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail>();

  useEffect(() => {
    if (pokemon.url) {
      pokedexApi
        .get(pokemon.url)
        .then(({ data }) => setPokemonDetails(data))
        .finally(() => setLoading(false));
    }
  }, [pokemon]);

  return (
    <Root>
      <Picture sprites={pokemonDetails?.sprites} />
      <Header name={pokemonDetails?.name ?? ""} loading={loading} />
      <Description species={pokemonDetails?.species} />
      <Footer name={pokemonDetails?.name ?? ""} />
    </Root>
  );
}

export default Card;
