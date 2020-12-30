import { memo } from "react";
import { Root, Title } from "./styled";

interface HeaderProps {
  name: string;
  loading: boolean;
}

function Header({ name, loading }: HeaderProps): JSX.Element {
  return (
    <Root>
      <Title loading={loading}>{name}</Title>
    </Root>
  );
}

export default memo(Header);
