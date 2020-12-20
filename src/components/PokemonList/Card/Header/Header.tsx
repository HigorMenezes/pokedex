import { Root, Title } from "./styled";

interface HeaderProps {
  name: string;
}

function Header({ name }: HeaderProps): JSX.Element {
  return (
    <Root>
      <Title>{name}</Title>
    </Root>
  );
}

export default Header;
