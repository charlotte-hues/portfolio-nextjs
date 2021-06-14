import React from 'react';
import styled from 'styled-components';
import Link from "next/link";


import Arrow from '../../ui/Icons/ArrowIcon';

const LinkContainer = styled.div`
    margin: 40px 0 20px;
    text-align: center;
    fill: ${({theme}) => theme.colors.primary};
    
    a {        
        color: ${({theme}) => theme.colors.primary};
        fill: ${({theme}) => theme.colors.primary};
        opacity: 0.8;
        font-weight: 900;
        transition: opacity 0.3s ease;
        display: flex;
        justify-content: center;
        :hover {
            opacity: 1;
        }
    }
`;

const ProjectFooter = ({project}) => {

    const link = "/work/" + project.pathName

    return (
        <LinkContainer>
                <Link href={link}>
                <h4 style={{display: 'inline-block', marginRight: "10px"}}>{`view next project - ${project.title}`}</h4>
                </Link>
                <div style={{alignSelf: "center"}}>
                <Link href={link}>
                    <Arrow size="32px" right/>
                </Link>
                </div>
        </LinkContainer>
    )
};

export default ProjectFooter;