import React from "react";
import styled from "styled-components";

// import MenuNavigationItems from "../../ui/navigation/MenuNavigationItems";
import ContactLinks from '../Contact/Links/ContactLinks';
import MenuIcon from '../../ui/Icons/CloseIcon';

const StyledMenu = styled.div`
position: fixed;
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
height: 100%;
left: 0;
top: 0;
z-index: 400;
padding: 20% 20%;
opacity: 0;
background: ${({theme}) => theme.colors.background};
transition: ${({ theme }) => theme.transition.background};
fill: ${({theme}) => theme.colors.highlight};
`;


const Menu = ({close}) => {

    return (
        <StyledMenu onClick={() => close()}>    
            <div style={{
                position: "absolute", 
                top: "0",
                right: "20px",
                height: "108px", 
                width: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
  }} >
                <MenuIcon/>
            </div>
            {/* <MenuNavigationItems close={close} /> */}
            <ContactLinks/>
        </StyledMenu>)
}

export default Menu;
