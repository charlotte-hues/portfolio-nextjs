import React from "react";
import styled from "styled-components";


import * as images from '../../components/sections/Work/emotionSim/images';
import Emotions, { EmotionsDescription } from '../../components/sections/Work/emotionSim/emotions/emotions';
import WheelOfEmotions from '../../components/sections/Work/emotionSim/wheel/WheelOfEmotions';
import WireframeGifs from '../../components/sections/Work/emotionSim/wireframeGifs';

import ProjectCard from "../../components/ui/project/ProjectCard";
import useProjectWrapper from "../../components/sections/Work/UseProjectWrapper";

const Container = styled(ProjectCard)`
    background: #F6EFEE url("/images/projects/emotionSim/911Background.png") top center repeat-y;
    background-size: 140%;
    padding: 2% 3%;
    color: #0C2A3F;
`;

const EmotionSim = () => { 

    const Project = (
        <React.Fragment>
            {images.MissingTheBusVideo}   
            <Container>   
            
                <Emotions/>
                {EmotionsDescription}
                {WheelOfEmotions}
                <WireframeGifs/>           
            </Container>
            {images.Hill}
            {images.closeUp}
        </React.Fragment>
        )

    const WrappedProject = useProjectWrapper(Project)
    
    return WrappedProject
}

export default EmotionSim;