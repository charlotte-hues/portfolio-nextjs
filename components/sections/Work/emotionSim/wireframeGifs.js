import styled from 'styled-components';
import Image from 'next/image'

import FlexContainer from '../../../ui/project/FlexContainer';
import device from '../../../shared/device/device';

const wireframeArray = [
    {id: "joy", src: '/images/projects/emotionSim/gif/1-joyWireframe.gif', alt: "visual representation of joy", description: "visual representation of joy"},
    {id: "trust", src: '/images/projects/emotionSim/gif/2-trustWireframe.gif', alt: "visual representation of trust", description: "visual representation of trust"},
    {id: "fear", src: '/images/projects/emotionSim/gif/3-fearWireframe.gif', alt: "visual representation of fear", description: "visual representation of fear"},
    {id: "suprise", src: '/images/projects/emotionSim/gif/4-supriseWireframe.gif', alt: "visual representation of suprise", description: "visual representation of suprise"},
    {id: "sadness", src: '/images/projects/emotionSim/gif/5-sadnessWireframe.gif', alt: "visual representation of sadness", description: "visual representation of sadness"},
    {id: "disgust", src: '/images/projects/emotionSim/gif/6-disgustWireframe.gif', alt: "visual representation of disgust", description: "visual representation of disgust"},
    {id: "anger", src: '/images/projects/emotionSim/gif/7-angerWireframe.gif', alt: "visual representation of anger", description: "visual representation of anger"},
    {id: "anticipation", src: '/images/projects/emotionSim/gif/8-anticipationWireframe.gif', alt: "visual representation of anticipation", description: "visual representation of anticipation"},
];


const WireframeGif = styled.div`
    width: 100%;    

    @media ${device.laptop} {
        width: 300px;
  }
`

const WireframeGifs = () => {
    const All = wireframeArray.map((wireframe, i) => {
        return (
        <WireframeGif key={i} >
        <Image  
        src={wireframe.src} 
        description={wireframe.src} 
        alt={wireframe.alt} 
        layout="responsive"
        width={360}
        height={125}
        />
        </WireframeGif>
        )
    })

    return (
        <FlexContainer>
            {All}
        </FlexContainer>
    )
};


export default WireframeGifs;