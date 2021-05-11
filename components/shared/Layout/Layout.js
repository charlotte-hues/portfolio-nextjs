import React, { useState, useCallback } from "react";
import styled from "styled-components";

import Toolbar from "./Toolbar/Toolbar";
import SideMenu from "./SideMenu/SideMenu";
import { useTheme } from '../../../styles/ThemeContext';
import device from '../device/device';

const StyledMain = styled.main`  
  width: 100%;
  height: auto;
  padding: 80px 20px;
  color: ${({theme}) => theme.colors.primary};

  @media ${device.laptop} {
    padding: 80px 20%;
  }

`;

const Layout = props => {
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState(false);
  const theme = useTheme();

  const openMenu = useCallback(() => {
    setSideMenuIsVisible(true);
  }, [setSideMenuIsVisible]);

  const closeMenu = useCallback(() => {
    setSideMenuIsVisible(false);
  }, [setSideMenuIsVisible]);

  // if(!theme.mountedComponent) return <div/>
  return (
    <>      
      <Toolbar openMenu={openMenu} />
      <SideMenu isOpen={sideMenuIsVisible} close={closeMenu} />
      <StyledMain id="MainContent">
        {props.children}
      </StyledMain>
    </>
  );
};

export default Layout;