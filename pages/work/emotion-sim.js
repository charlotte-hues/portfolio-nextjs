import React from "react";
import styled from "styled-components";
import Head from 'next/head'

import * as images from '../../components/sections/Work/emotionSim/images';
import Emotions, { EmotionsDescription } from '../../components/sections/Work/emotionSim/emotions/emotions';
import WheelOfEmotions from '../../components/sections/Work/emotionSim/wheel/WheelOfEmotions';
import WireframeGifs from '../../components/sections/Work/emotionSim/wireframeGifs';

import ProjectCard from "../../components/ui/project/ProjectCard";

const Container = styled(ProjectCard)`
    background: #F6EFEE url("/images/projects/emotionSim/911Background.png") top center repeat-y;
    background-size: 140%;
    padding: 2% 3%;
    color: #0C2A3F;
`;

const EmotionSim = () => { 
    
    return (
        <>
        <Head>
        <meta
            name="description"
            content="A project visualising Robert Plutchik's theory of emotions"
          />
          <title>Emotion Simulator</title>
        </Head>
        {images.MissingTheBusVideo}   
        <Container>   
          
            <Emotions/>
            {EmotionsDescription}
            {WheelOfEmotions}
            <WireframeGifs/>           
        </Container>
        {images.Hill}
        {images.closeUp}
        </>
    )
}

export default EmotionSim;