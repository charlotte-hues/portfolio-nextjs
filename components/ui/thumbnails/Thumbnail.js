import React from "react";
import Link from "next/link";
import styled from "styled-components";

import * as images from './thumbnailImages';
import Arrow from '../Icons/ArrowIcon';
import device from '../../shared/device/device';

const Container = styled.div`
  position: relative;
  width: 100%;


   
  margin: 20px 0 40px;
  overflow: hidden;
  max-width: 600px;
  align-self: center;

  @media ${device.laptop} {
    align-self: ${props => props.align}
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${({theme}) => theme.colors.primary};
  fill: ${({theme}) => theme.colors.primary};
  padding-bottom: 10px;
  transition: ${({ theme }) => theme.transition.fill};
  * { 
    margin: 0;
  }
`;

const SideDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  padding-right: 4%;
`

const Title = styled.h2`
  flex-grow: 10;
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: ${({theme}) => theme.colors.background};
  transition: ${({ theme }) => theme.transition.background};
  overflow: hidden;
  img {
    opacity: 90%;
  }
`;


const ProjectThumb = ({ link, i, year, title, image, align}) => {

  let titleArr = title.split(" ");
  let index = titleArr.length/2;
  let line1 = titleArr.slice(0, index).join(' ').toUpperCase() + " ";
  let line2 = titleArr.slice(index, titleArr.length).join(" ").toUpperCase();
  
  return (
    <Link href={link}>
      <Container align={align}>
        <DetailsContainer>
          <SideDetails>
            <h3>.0{i}</h3>
            <p>{year}</p>
          </SideDetails>      
          <Title>{line1}<br />{line2}</Title>
          <Arrow size="64px" direction="down"/>    
        </DetailsContainer>
        <Thumbnail>
          {images[image]}
        </Thumbnail>
      </Container>
    </Link>
  );
};

export default ProjectThumb;