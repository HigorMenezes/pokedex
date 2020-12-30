import { memo } from "react";
import { Sidebar, HeaderBar, Main } from "./styled";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Sidebar>SideBar</Sidebar>
      <HeaderBar>Header</HeaderBar>
      <Main>{children}</Main>
    </>
  );
}

export default memo(Layout);
