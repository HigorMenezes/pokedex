export interface SearchDefault {
  name: string;
  url: string;
}

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
  name: string;
  sprites: Sprites;
  species: SearchDefault;
}

export interface FlavorText {
  flavor_text: string;
  language: SearchDefault;
}
export interface SpeciesDetail {
  name: string;
  flavor_text_entries: FlavorText[];
}
