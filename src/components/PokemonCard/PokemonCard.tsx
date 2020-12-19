import { useState, useEffect } from "react";

import { Root, Header, Picture, Footer } from "./styled";

import pokedexApi from "../../services/pokedexApi";

import { PokemonResult, PokemonDetail } from "../../@types/Pokemon";

interface PokemonCardProps {
  pokemon: PokemonResult;
}

function PokemonCard({ pokemon }: PokemonCardProps): JSX.Element {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail>();

  useEffect(() => {
    if (pokemon.url) {
      pokedexApi.get(pokemon.url).then(({ data }) => {
        setPokemonDetails(data);
      });
    }
  }, [pokemon]);

  return (
    <Root>
      <Header>
        <h1>{pokemon.name}</h1>
      </Header>
      <Picture src={pokemonDetails?.sprites.front_default ?? ""} />
      <Footer>s2</Footer>
    </Root>
  );
}

export default PokemonCard;
