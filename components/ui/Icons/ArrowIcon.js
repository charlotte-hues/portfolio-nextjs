import React from "react";
import styled from "styled-components";

const ArrowSVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 32 32"
})`
    width: ${props => props.size};
    height: ${props => props.size};
    cursor: pointer;
    transform: rotate(${props => props.rotation}deg);
`;

const Arrow = props => {

  let rotation = 0;
  if(props.up) rotation = 180;
  if(props.right) rotation = 270;
  if(props.left) rotation = 90;


  return (
    <ArrowSVG rotation={rotation} onClick={props.onClick} size={props.size}>
      <path d="M5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16ZM16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3ZM17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10V19.5858L10.7071 15.2929C10.3166 14.9024 9.68342 14.9024 9.29289 15.2929C8.90237 15.6834 8.90237 16.3166 9.29289 16.7071L15.2929 22.7071C15.6834 23.0976 16.3166 23.0976 16.7071 22.7071L22.7071 16.7071C23.0976 16.3166 23.0976 15.6834 22.7071 15.2929C22.3166 14.9024 21.6834 14.9024 21.2929 15.2929L17 19.5858V10Z" />
    </ArrowSVG>
  );
};

export default Arrow;