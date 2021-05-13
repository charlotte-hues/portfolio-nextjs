import React, {useState} from "react";
import styled from 'styled-components';
import {isMobile} from 'react-device-detect';

import * as tiles from './AllTiles';
import getRandNum from '../../../shared/utility/getRandNum';

const TileWrapper = styled.div`
    display: inline-block;
    position: relative;
    width: auto;
    height: auto;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    fill: ${({theme}) => theme.colors.primary};
    transition: ${({ theme }) => theme.transition.fill};

    float: left;
    
    svg {
      position: absolute;
      top: 0;
      left: 0;        
      width: ${props => props.width}px;
      height: ${props => props.width}px;
    }
`

const tilesArr = [];
for (let key in tiles) {
    tilesArr.push(tiles[key].props.id);
};

const TileGenerator = props => { 
  const [Tile, setTile] = useState(props.tile !== undefined ? tiles[props.tile] : tiles[tilesArr[getRandNum(null, tilesArr.length)]]);

  const switchTileHandler = e => {
    if(e.buttons !== 2) { setTile(prevTile => {
      return tiles[tilesArr[getRandNum(tilesArr.indexOf(prevTile.props.id), tilesArr.length)]]
    })
  }} 

  return (
    <TileWrapper 
      width={props.width}
      unselectable="on"
      onContextMenu={(e)=> e.preventDefault()} 
      onClick={e => switchTileHandler(e)}
      onMouseEnter={e => !isMobile && switchTileHandler(e)} 
    >
        {Tile}
    </TileWrapper>
  )
}

export default TileGenerator;
