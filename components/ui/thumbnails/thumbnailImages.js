import styled from 'styled-components';
import icbThumbnail from './icbThumbnail.png';
import emotionSimThumbnail from './emotionSimThumbnail.jpg';
import iconsThumbnail from './iconsThumbnail.png';
import logosThumbnail from './logosThumbnail.png';

const IMG = styled.img`
    width: 100%;
    height: auto;
    transform-origin: center;
`
export const InfiniteColoringBook = <IMG 
src={icbThumbnail} title='The Infinite Coloring Book Thumbnail' 
description="Multiple different screens from the Infinite Coloring Book App layed out at 30 degrees"
alt="Multiple different screens from the Infinite Coloring Book App layed out at 30 degrees"
/> 

export const EmotionSim = <IMG 
src={emotionSimThumbnail} title='Emotion Simulator Thumbnail' 
description="A sloped box with a ball rolling down it"
alt="A sloped box with a ball rolling down it"
/> 

export const IconCollection = <IMG 
src={iconsThumbnail} title='Icon Collection Thumbnail' 
description="Isometric cards showing a collection of fruit icons"
alt="Isometric cards showing a collection of fruit icons"
/> 

export const LogoCollection = <IMG 
src={logosThumbnail} title='Logo Collection Thumbnail' 
description="A selection of logos displayed at an angle on white cards"
alt="A selection of logos displayed at an angle on white cards"
/> 
