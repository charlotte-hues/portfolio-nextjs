import React, { useContext } from "react";
import styled from "styled-components";
import Link from 'next/link';
// import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from 'styled-components';

const NavLi = styled(Link)`
  box-sizing: border-box;
  display: block;
  text-align: left;
  width: 100%;
  line-height: 80px;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 700;
  letter-spacing: 0.04rem;
  opacity: 0;
  color: ${({theme}) => theme.colors.primary};
  
  &:hover {
    cursor: pointer;
  }
`;

const NavigationItem = React.forwardRef(({link, children }, ref) => {
  const location = useLocation();
  const active = location.pathname === link;
  
  const themeContext = useContext(ThemeContext);

  const startColor = active ? themeContext.colors.highlight : themeContext.colors.primary;

  return (
    <NavLi to={link}
    activeClassName="Active"
    ref={ref}
    style={{color: startColor}}
    >
      <h2>
      {children}
      </h2>
    </NavLi>
)});

export default NavigationItem;