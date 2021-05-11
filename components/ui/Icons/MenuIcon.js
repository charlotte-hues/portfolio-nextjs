import React from "react";
import styled from "styled-components";

import device from '../../shared/device/device';

const MenuSVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 32 32"
})`
    height: 32px;
    width: 32px;
    stroke-linejoin: round;
    stroke-linecap: round;
    fill: none;
    cursor: pointer;
    stroke: #272727;
    stroke: ${({theme}) => theme.colors.primary};
    stroke-width: 2;
    stroke-linejoin: round;

    @media ${device.laptop} {
      display: none;
    }

    & path {        
        transition: all 0.5s ease-out, ${({theme}) => theme.transition.stroke};;
    }  
    &:hover {
    & .top {
      d: path("M16 8 L4 8 L16 8 L28 8 L16 8");
    }
    & .middle {
      d: path("M12 16 L4 16 L16 16 L28 16 L20 16");
    }
    & .bottom {
      d: path("M12 24 L4 24 L16 24 L28 24 L20 24");
    }
    }
`;

const Menu = props => {

  return (
    <MenuSVG {...props}>
      <path className="top" d="M16 4 L4 8 L16 12 L28 8 L16 4" />
      <path className="middle" d="M8 14 L4 16 L16 20 L28 16 L24 14" />
      <path className="bottom" d="M8 22 L4 24 L16 28 L28 24 L24 22" />
    </MenuSVG>
  );
};

export default Menu;
