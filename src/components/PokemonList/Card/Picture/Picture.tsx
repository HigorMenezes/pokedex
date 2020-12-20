import { Root, PokeballPlaceholder, Sprite } from "./styled";

import { Sprites } from "../../../../@types/Pokemon";

interface PictureProps {
  sprites?: Sprites;
}

function Picture({ sprites }: PictureProps): JSX.Element {
  return (
    <Root>
      <PokeballPlaceholder />
      <Sprite src={sprites?.front_default ?? ""} />
    </Root>
  );
}

export default Picture;
