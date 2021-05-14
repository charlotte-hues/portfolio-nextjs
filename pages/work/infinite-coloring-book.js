import React from "react";
import styled from "styled-components";
import Head from 'next/head';

import * as images from '../../components/sections/Work/icb/icbImagesAndVideo';
import ProjectCard from "../../components/ui/project/ProjectCard";


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
    
    return (
        <>
        <Head>
        <meta
            name="description"
            content="A web app created during lockdown to allow users to create their own patterns that they can print off and color in."
          />
          <title>The Infinite Coloring Book</title>
        </Head>
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
        </>
    )
}

export default InfiniteColoringBook;