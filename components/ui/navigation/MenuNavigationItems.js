import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from 'gsap';

import NavigationItem from "./NavigationItem/NavigationItem";
import { NavLinks } from '../../shared/routes';

const NavItemsContainer = styled.nav`
  width: auto;
  height: auto;
`;

const MenuNavigationItems = React.memo(props => {

  const menuItemsArr = NavLinks.filter(r => r.showInMenu);
  const refs = useRef([]);

  const menuItems = menuItemsArr.map((r, i) => {
    refs.current.push(React.createRef());
    return <NavigationItem ref={refs.current[i]} link={r.path} key={r.key} active>
            {r.key.toUpperCase()}
          </NavigationItem>
  });

  useEffect(() => {
    const tl = gsap.timeline();
    refs.current.forEach(ref => tl.set(ref.current, {x: -200, autoAlpha: 0}));
    refs.current.reduce((tl, ref, i) => {
      const overlap = i > 0 ? "-=0.3" : 0;
      return tl.to(ref.current, {duration: 0.5, autoAlpha: 1, x: 0, ease: "back"}, overlap);
    }, gsap.timeline());
    tl.play();
  }, []);
  
  return (
    <NavItemsContainer onClick={() => props.close()}>
      {menuItems}        
    </NavItemsContainer>
  );
});

export default MenuNavigationItems;