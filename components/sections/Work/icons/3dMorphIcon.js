import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from 'gsap';

const paths = {
  cube:
    "M16 28 L16 15 L10.5 12 L5 9 L5 22 L16 28 Z M16 28 L16 15 L21.5 12 L27 9 L27 22 L16 28 Z M5 9 L16 3 L27 9",
  pyramid:
    "M16 28 L16 15 L16 3 L11 10 L3 21 L16 28 Z M16 28 L16 15 L16 3 L21 10 L29 21 L16 28Z M11 10L16 3 L21 10",
  smallCube:
    "M16 28 L16 20L10.5 17 L5 14L5 22L16 28 Z M16 28 L16 20 L21.5 17 L27 14 L27 22L16 28Z M5 14 L16 8 L27 14",
  wideCube:
    "M16 28 L16 15 L10.5 12 L9.5 11.5 L9.5 24.5L16 28 Z M16 28 L16 15 L21.5 12 L27 9 L27 22 L16 28 Z M9.5 11.5 L20.5 5.5 L27 9",
  tallCube:
    "M21.5 25 L21.5 12 L17 9.5 L16 9 L16 22 L21.5 25 z M21.5 25 L21.5 12 L24.25 10.5 L27 9 L27 22 L21.5 25z M16 9 L21.5 6 L27 9",
  house:
    "M16 28 L16 20L10.5 17 L5 14 L5 22 L16 28Z M16 28 L16 20L21.5 11 L27 14 L27 22L16 28Z M5 14 L11 5.5 L27 14",
  cup:
    "M16 28 L16 17 L10.5 14 L5 11 L9.5 24.5 L16 28Z M16 28 L16 17 L21.5 14 L27 11 L22.5 24.5 L16 28Z M5 11 L16 5 L27 11"
};

const Icon = styled.svg.attrs({
  viewBox: "0 0 32 32",
  xmlns: "http://www.w3.org/2000/svg"
})`
  width: 100%;
  height: 100%;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  stroke-linejoin: round;
  stroke-linecap: round;
  fill: none;
  stroke: ${props => props.iconColor};
  stroke-width: 0.5;
`;

const params = { ease: "steps(4)", duration: 1}


const MorphIcon = props => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {keyframes: [
      {attr: {d: paths.pyramid}, ...params},
      {attr: {d: paths.smallCube}, ...params},
      {attr: {d: paths.wideCube}, ...params},
      {attr: {d: paths.tallCube}, ...params},
      {attr: {d: paths.house}, ...params},
      {attr: {d: paths.cup}, ...params},
      {attr: {d: paths.cube}, ...params},
    ],
    repeat: -1,
    
  })
  })
  return (
    <Icon iconColor={props.color}>
      <path ref={ref} d={paths.cube} />
    </Icon>
  );
};

export default MorphIcon;