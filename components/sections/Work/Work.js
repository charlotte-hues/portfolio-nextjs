import React, { useEffect } from "react";
import styled from "styled-components";

import allWork from "./allWork";
import Thumbnail from "../../ui/thumbnails/Thumbnail";
import device from '../../shared/device/device';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 80px;

  @media ${device.laptop} {
      padding-top: 100px;
  }
`;

const Work = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  let i = 0;
  let align = false;
  let links = allWork.map(project => {    
      i++;
      align = !align;  
      return (   
      <Thumbnail
        link={"/work/" + project.pathName}
        key={project.pathName}
        title={project.title}
        year={project.year}
        i={i}
        image={project.thumbnail}
        align={align ? "flex-start" : "flex-end"}
      />
    )});

  return (
        <React.Fragment>
        <Container>
        {links}
        </Container>
        </React.Fragment>
  );
};

export default Work;