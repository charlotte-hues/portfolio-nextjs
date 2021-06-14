import React from "react";
import styled from "styled-components";

import * as images from '../../components/sections/Work/icb/icbImagesAndVideo';
import ProjectCard from "../../components/ui/project/ProjectCard";
import useProjectWrapper from "../../components/sections/Work/UseProjectWrapper";


const Container = styled(ProjectCard)`
    background: #F7F3EE;
    padding: 0;
    color: #C74F33;    
`;

const Steps = styled.div`
    margin: 10% 10% 5%;
    font-family: 'Patua One', sans-serif;
`;

const Step1 = (
<Steps>
    <h1>Create</h1>
    <h2>Use the free web app to create your pattern</h2> 
</Steps>
);

const Step2 = (
<Steps>
    <h1>Color</h1>
    <h2>Print or download your pattern and color it in</h2>
</Steps>
);

const InfiniteColoringBook = () => { 
    
    const Project = (
        <Container>      
            {images.Logo}
            {images.MockUp}
            {Step1}                       
            {images.Patterns} 
            {Step2}    
            {images.KidsBoth}
            {images.KidsClose}
            {images.KidsTopdown}
            {images.Ipad}      
            {images.InfiniteCombinations}      
        </Container>
    )

    const WrappedProject = useProjectWrapper(Project)
    
    return WrappedProject;
}

export default InfiniteColoringBook;