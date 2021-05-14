import React from 'react';
import styled from 'styled-components';

import device from '../../../../shared/device/device';

const intensities = [
    {label: "LOW", color: "#C8CBD0"},
    {label: "MED", color: "#9AA6B1"},
    {label: "HIGH", color: "#7A8D9C"},
];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 30%;
    margin: 0 0 5%; 

    p {
        white-space: pre;
    }
`

const Box = styled.div`
    width: 40px;
    height: 40px;
    background: ${props => props.fill};
    text-align: center;
    line-height: 40px; 
    font-weight: 800;
    font-size: 0.6rem;

    @media ${device.laptop} {
        width: 65px;
        height: 65px;
        font-size: 0.7rem;
  }
`;

const BoxesContainer = styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
    max-width: 140px;

    @media ${device.laptop} {
        max-width: 240px;
  }
`;

const IntensityKey = () => {
    const boxes = intensities.map(i => <Box key={i.label} fill={i.color}>{i.label}</Box>)

    return (
        <Container>
        <h3 style={{margin: "0 0 18.72px", minWidth: "30%"}} >Intensity Key</h3>
        <BoxesContainer>
            {boxes}
        </BoxesContainer>
        <p>
        <br/>
        Each primary emotion has a polar opposite:
        <br />
        <br />
        {`Joy  <--->  Sadness`}<br />
        {`Fear  <--->  Sadness`}<br />
        {`Anticipation  <--->  Sadness`}<br />
        {`Disgust  <--->  Sadness`}
        </p>
        </Container>

    )
};

export default IntensityKey;