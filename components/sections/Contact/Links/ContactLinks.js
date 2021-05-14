import React from "react";
import styled from "styled-components";

import Arrow from '../../../ui/Icons/ArrowIcon';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    height: auto;
    font-size: 1.25em;
    font-weight: 900;
`;

const Link = styled.a`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    margin-bottom: 0.5rem;
    width: 12rem;
    padding: 0.5rem 0;
    border-bottom: 2px dashed ${({theme}) => theme.colors.primary};
    fill: ${({theme}) => theme.colors.highlight};

    h4 {
        margin: 0;
        color: ${({theme}) => theme.colors.highlight};
        &:after {
                position: absolute;
                content: "";
                left: 0;
                top: 0;
                width: 0%;
                height: 100%;
                border-bottom: 2px dashed ${({theme}) => theme.colors.highlight};
                transition: all 0.3s ease;
            }
    }

    &:hover {
        h4 {
            &:after {
                position: absolute;
                content: "";
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-bottom: 2px dashed ${({theme}) => theme.colors.highlight}; 
            }
        }
    }

    &:visited {
        color: ${({theme}) => theme.colors.primary};
        ${'' /* border-color: ${({theme}) => theme.colors.primary}; */}
        fill: ${({theme}) => theme.colors.highlight};
    }

    

    &:active {
    color: ${({theme}) => theme.colors.primary};
    }
`

const links = [
    {
        name: "Dribble",
        href: "https://dribbble.com/charlottehues",
    },
    {
        name: "Behance",
        href: "https://www.behance.net/charlottehues",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/charlottehues/",
    },
]

const ContactLinks = () => {
    return (
        <Container>
        {links.map(link => (
            <Link key={link.name} href={link.href} rel="noopener" target="_blank" afterCont={link.name}>
                <h4>{link.name}</h4>
                <Arrow right size="1.3rem" />
            </Link>
            ))}
        </Container>
    )
};

export default ContactLinks;