import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import {useRouter} from 'next/router'
;
import device from '../../../shared/device/device';

const NavLi = styled("div")`
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
  const location = useRouter();
  const active = location.asPath === link;

  return (
    <Link href={link} scroll={false} >
    <NavLi 
    className={active ? "Active" : null}
    >
      <h2>
      {children}
      </h2>
    </NavLi>
    </Link>
)};

export default ToolbarNavItem;