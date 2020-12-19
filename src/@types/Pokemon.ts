export interface PokemonResult {
  name: string;
  url: string;
}

export interface Pokemon {
  count: number;
  next: string;
  previous: string;
  results: PokemonResult[];
}

export interface Sprites {
  front_default: string;
}

export interface PokemonDetail {
  sprites: Sprites;
}
