import React from "react";
import styled from "styled-components";

import device from '../../shared/device/device';

const SwitchContainer = styled.div`
    width: 40px;
    height: 20px;
    position: relative;
    border: 2px solid ${({theme}) => theme.colors.primary};
    transition: ${({theme}) => theme.transition.border};
    border-radius: 50px;
    cursor: pointer;

    @media ${device.laptop} {
        width: 58px;
        height: 28px;
  }
`;

const Dot = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background: ${({theme}) => theme.colors.primary};
    position: absolute;
    top: 1px;
    left: ${props => props.isOn ? "5%" : "50%"};
    transition: left 0.2s ease, ${({theme}) => theme.transition.background};

    @media ${device.laptop} {
        width: 20px;
        height: 20px;
        top: 2px;
  }
`;



const Switch = (props) => {

    const clickHandler = () => {
        props.click();
    }

    return (
        <SwitchContainer onClick={() => clickHandler()}>
            <Dot isOn={props.isOn}/>
        </SwitchContainer>
    )
}

export default Switch;