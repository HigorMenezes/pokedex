import FavoriteButton from "./FavoriteButton";

import { Root } from "./styled";

interface FooterProps {
  isFavorite: boolean;
}

function Footer({ isFavorite }: FooterProps): JSX.Element {
  return (
    <Root>
      <FavoriteButton isFavorite={isFavorite} />
    </Root>
  );
}

Footer.defaultProps = {
  isFavorite: false,
} as Partial<FooterProps>;

export default Footer;
