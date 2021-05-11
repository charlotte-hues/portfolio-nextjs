import React from "react";
import Link from "next/link";
import styled from "styled-components";

import MenuIcon from "../../../ui/Icons/MenuIcon";
import Switch from '../../../ui/Inputs/ThemeSwitch';
import ToolbarNavItems from '../../../ui/navigation/ToolbarNavItems';

const Header = styled.header`
  position: fixed;  
  height: 108px;
  width: 100%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

const Home = styled.h4`
  font-weight: 700;
  letter-spacing: 0.04rem;
  cursor: pointer;
  color: ${({theme}) => theme.colors.primary};
  overflow: hidden;
  white-space: nowrap;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  ${'' /* gap: 1.5rem;  // NOT SUPPORTED */}
`;

const Toolbar = React.memo(({ openMenu }) => {
  return (
    <Header >
      <Link href="/">
        <Home>CHARLOTTE HUGHES</Home>
      </Link>
      <Links>
        <Switch />
        <div style={{width: "1.5rem"}}/>
          <MenuIcon onClick={openMenu}/>
          <ToolbarNavItems/>
      </Links>
    </Header>
  );
});

export default Toolbar;