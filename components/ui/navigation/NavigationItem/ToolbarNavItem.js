import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import device from '../../../shared/device/device';

const NavLi = styled(Link)`
  display: none;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  line-height: 80px;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 700;
  letter-spacing: 0.04rem;
  color: ${({theme}) => theme.colors.primary};
  padding-left: 18px;

  @media ${device.laptop} {
    display: block;
  }
  
  &:hover {
    cursor: pointer;
  }
  &.Active {
    color: ${({theme}) => theme.colors.highlight};
  }
`;

const ToolbarNavItem = ({link, children }) => {
  
  return (
    <NavLi href={link}
    activeClassName="Active"
    >
      <h2>
      {children}
      </h2>
    </NavLi>
)};

export default ToolbarNavItem;