import { useState, useEffect } from "react";

import Card from "./Card";

import pokedexApi from "../../services/pokedexApi";

import { Root } from "./styled";

import { Pokemon } from "../../@types/Pokemon";

function PokemonList(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon>();

  useEffect(() => {
    pokedexApi
      .get("/pokemon")
      .then(({ data }) => setPokemons(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Root>
      {pokemons?.results?.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      )) ?? null}
    </Root>
  );
}

export default PokemonList;
