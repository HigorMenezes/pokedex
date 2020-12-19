import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: var(--sidebar-width);
  height: 100vw;
`;

export const HeaderBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  padding-left: var(--sidebar-width);

  width: 100vw;
  height: var(--header-bar-height);
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;

  padding-left: var(--sidebar-width);
  padding-top: var(--header-bar-height);
`;
