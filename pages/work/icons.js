import React from "react";
import styled from "styled-components";

import ProjectCard from "../../components/ui/project/ProjectCard";
import iconData from "../../components/sections/Work/icons/IconsProjectData";
import useProjectWrapper from "../../components/sections/Work/UseProjectWrapper";


const IconSetContainer = styled(ProjectCard)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 20px;
  background-color: #E5E9F0;
`;

const Container = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  width: ${props => props.size};
  height: ${props => props.size};
  margin: 30px 20px;
  position: relative;
`;

const IconSet = ({data}) => {
  const iconColor = "#2E3440";

  return (
    <IconSetContainer>
      {Object.keys(data.icons).map((currIcon, i) => {
        let Icon = data.icons[currIcon];
        return (
          <Container size={data.size} key={currIcon}>
            <Icon color={iconColor} />
          </Container>
        );
      })}
    </IconSetContainer>
  );
};

const IconsProject = () => {
  const IconSets = Object.keys(iconData)
  .map(setName => {
    return (
      <IconSet key={setName} data={iconData[setName]} />
    );
  })
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []);

const WrappedProject = useProjectWrapper(IconSets)
    
return WrappedProject
};

export default IconsProject;