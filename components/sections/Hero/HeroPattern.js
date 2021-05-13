import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import TileGenerator from './Tiles/TileGenerator';
import {patterns} from './patterns';
import getRandNum from '../../shared/utility/getRandNum';

const TileGrid = styled.div`
    display: tile-grid;
    position: relative;

    display: grid;
    grid: auto-flow / repeat(${props => props.size}, 1fr);
    width: auto;
    width: ${props => props.width};
    height: auto;
    background-color: none;
`

const HeroPattern = props => {
    const localPattern = (typeof window !== 'undefined') ? window.localStorage.getItem("pattern") : null;
    const patternNum =  localPattern !== null ? getRandNum(parseInt(localPattern), patterns.length) : 0;
    const ref = useRef();
    const [width, setWidth] = useState(250);

    const [windowWidth, setWindowWidth] = useState(0);

    

    useEffect(() => {
      const updateWindowDimensions = () => {
        const newWidth = window.innerWidth;
        setWindowWidth(newWidth);
      };
      window.addEventListener("resize", updateWindowDimensions);
      return () => window.removeEventListener("resize", updateWindowDimensions)  
    }, []);

    useEffect(() => window.localStorage.setItem("pattern", patternNum), [patternNum]);

    useEffect(() => {
        if(ref.current !== undefined) {
            setWidth(ref.current.clientWidth);
        }
      }, [setWidth, windowWidth]);

    const Tiles = () => patterns[patternNum].map((t,i) => (
            <TileGenerator 
                width={width / 5}
                key={i} 
                tile={t}
            />));

    return (
        <TileGrid ref={ref} width={width} size={5}>
            <Tiles/>
        </TileGrid>
    )
}

export default HeroPattern