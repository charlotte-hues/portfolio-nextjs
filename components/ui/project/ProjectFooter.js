import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Arrow from '../../../ui/Icons/ArrowIcon';

const LinkContainer = styled.div`
    margin: 40px auto 20px;
    text-align: center;
    width: fit-content;


    a {  
        color: ${({theme}) => theme.colors.primary};
        fill: ${({theme}) => theme.colors.primary};
        opacity: 0.8;
        font-weight: 900;
        transition: opacity 0.3s ease;
        display: flex;
        justify-content: center;

        &:hover {
            opacity: 1;
        }
    }
`;

const ProjectFooter = ({project}) => {

    return (
        <LinkContainer>
            <Link to={"/work/" + project.pathName}>
                <h4 style={{display: 'inline-block', marginRight: "10px"}}>{`view next project - ${project.title}`}</h4>
                <div style={{alignSelf: "center"}}>
                    <Arrow size="32px" right/>
                </div>
            </Link>
        </LinkContainer>
    )
};

export default ProjectFooter;
