import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    padding: 0 2rem;
    opacity: 1;
    border: none;
    border-radius: 4px;
    background: ${props => props.theme.colors[props.invert ? "background" : "primary"]};
    color: ${props => props.theme.colors[props.invert ? "primary" : "background"]};
    fill: ${props => props.theme.colors[props.invert ? "primary" : "background"]};
    font-weight: 900;
    cursor: pointer;
    margin-top: 1rem;
    transition: ${({theme}) => theme.transition.background + "," + theme.transition.color};

    ${props => props.secondary && 
        `background: transparent;
        color: ${props.theme.colors.highlight};
        fill: ${props.theme.colors.highlight};
        border: 2px solid ${props.theme.colors.highlight};`
    }

    &:disabled {
        background: ${({theme}) => theme.colors.primary};
        opacity: 0.8;
        cursor: default;
    }
`;

export const Gap = styled.div`
    background: none;
    border: none;
    width: 1rem;
`

const Button = ({children, disabled, onClick, submit, invert, secondary}) => {
    return (
        <StyledButton 
        type={submit ? "submit" : "button"} 
        disabled={disabled}
        invert={invert}
        secondary={secondary}
        onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}

export default Button;