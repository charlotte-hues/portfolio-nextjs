import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem/ToolbarNavItem";
import {NavLinks} from '../../shared/routes';
import device from '../../shared/device/device';

const NavItemsContainer = styled.nav`
  display: none;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 0.4rem;
    color: ${({theme}) => theme.colors.primary};
    }
`;

const ToolbarNavItems = () => {
    const menuItemsArr = NavLinks.filter(r => r.showInToolbar);

    const menuItems = menuItemsArr.map(r => {
      return <NavigationItem  link={r.path} key={r.key} active>
              {r.key.toUpperCase()}
            </NavigationItem>
    });

    return (
        <NavItemsContainer >
          {menuItems}        
        </NavItemsContainer>
      );
}

export default ToolbarNavItems;