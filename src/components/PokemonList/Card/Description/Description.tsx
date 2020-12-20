import { useState, useEffect } from "react";

import pokedexApi from "../../../../services/pokedexApi";

import { Root, Text } from "./styled";

import { SearchDefault, SpeciesDetail } from "../../../../@types/Pokemon";

interface DescriptionProps {
  species?: SearchDefault;
}

function Description({ species }: DescriptionProps): JSX.Element {
  const [speciesResult, setSpeciesResult] = useState<SpeciesDetail>();

  useEffect(() => {
    if (species?.url) {
      pokedexApi.get(species?.url).then(({ data }) => {
        setSpeciesResult(data);
      });
    }
  }, [species]);

  const flavorText = speciesResult?.flavor_text_entries.find(
    (flavor) => flavor.language.name === "en",
  );

  return (
    <Root>
      <Text>{flavorText?.flavor_text ?? ""}</Text>
    </Root>
  );
}

export default Description;
