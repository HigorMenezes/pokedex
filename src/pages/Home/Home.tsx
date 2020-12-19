import { useState, useEffect } from "react";

import PokemonCard from "../../components/PokemonCard";

import pokedexApi from "../../services/pokedexApi";

import { Pokemon } from "../../@types/Pokemon";

function Home(): JSX.Element {
  const [pokemons, setPokemons] = useState<Pokemon>();

  useEffect(() => {
    pokedexApi.get("/pokemon").then(({ data }) => {
      setPokemons(data);
    });
  }, []);

  return (
    <div>
      {pokemons?.results?.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      )) ?? null}
    </div>
  );
}

export default Home;
