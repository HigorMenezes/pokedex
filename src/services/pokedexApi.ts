import axios from "axios";

const pokedexApi = axios.create({ baseURL: "https://pokeapi.co/api/v2/" });

export default pokedexApi;
