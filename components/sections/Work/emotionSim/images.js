import Image from 'next/image';

const style = {position: "relative", width: "100%", height: "auto", maxWidth: "730px", margin: "10px auto", display: "block"}

export const Hill = (
<div style={style}>
    <Image
    src='/images/projects/emotionSim/oneWayHillDesktop.jpg' title='Wheel of Emotions' 
    description="A full view image of the emotion simulator"
    alt="A full view of the emotion simulator" 
    layout="responsive"
    width={600}
    height={390}
    quality={50}
    />
</div>)

export const closeUp = (
<div style={style}>
<Image
src="/images/projects/emotionSim/closeUpDesktop.jpg"  title='Close Up' 
description="A close up image of the emotion simulator"
alt="A close up of the emotion simulator" 
style={style}
layout="responsive"
width={600}
height={390}
quality={50}
/> 
</div>);


export const MissingTheBusVideo = (
<div style={{
    maxWidth: "730px", 
    maxHeight: "410",
    padding: "56.25% 0 0 0", 
    position: "relative", 
    margin: "0 auto", 
    backgroundImage: `url("/images/projects/emotionSim/videoStill.jpg")`, 
    backgroundSize: "cover",
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
    overflow: "hidden"
    }}>
<iframe src="https://player.vimeo.com/video/530330952?background=1?autoplay=1?muted=1&loop=1&title=0&byline=0&portrait=0" 
style={{
    position: "absolute", 
    top: 0, left: 0, 
    width:"100%", 
    height:"100%",
}} 
title="missing the bus"
poster="/images/projects/emotionSim/videoStill.jpg"
frameBorder="0" 
allow="autoplay; fullscreen; picture-in-picture" >
</iframe>
</div>)
