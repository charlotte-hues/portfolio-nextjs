import React from "react";
import styled from "styled-components";

const SVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 32 32"
})`
    height: 32px;
    width: 32px;
    cursor: pointer;
`

const Close = props => {

return (
  <SVG onClick={props.onClick}>
  <path d="M9.85406 8.73663C10.2757 8.37989 10.9066 8.43247 11.2634 8.85408L16 14.4519L20.7366 8.85408C21.0934 8.43247 21.7243 8.37989 22.1459 8.73663C22.5675 9.09338 22.6201 9.72436 22.2634 10.146L17.31 16L22.2634 21.8541C22.6201 22.2757 22.5675 22.9067 22.1459 23.2634C21.7243 23.6202 21.0934 23.5676 20.7366 23.146L16 17.5481L11.2634 23.146C10.9066 23.5676 10.2757 23.6202 9.85406 23.2634C9.43245 22.9067 9.37987 22.2757 9.73661 21.8541L14.69 16L9.73661 10.146C9.37987 9.72436 9.43245 9.09338 9.85406 8.73663Z"/>
  </SVG>
);
};

export default Close;
