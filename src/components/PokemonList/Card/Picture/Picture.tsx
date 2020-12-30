import { memo } from "react";
import { Root, PokeballPlaceholder, Sprite } from "./styled";

import { Sprites } from "../../../../@types/Pokemon";

interface PictureProps {
  sprites?: Sprites;
}

function Picture({ sprites }: PictureProps): JSX.Element {
  console.log("ENTROU");

  return (
    <Root>
      <PokeballPlaceholder />
      <Sprite src={sprites?.front_default ?? ""} />
    </Root>
  );
}

export default memo(Picture);
