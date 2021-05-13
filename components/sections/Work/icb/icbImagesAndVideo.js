import Image from 'next/image';

export const Logo = (
<video autoPlay muted loop poster="/images/project/icb/logoPoster.png" >
    <source src="/images/project/icb/logo.webm" type="video/webm" /> 
    <source src="/images/project/icb/logo.mp4" type="video/mp4" /> 
</video>
)

export const Patterns = (
    <video autoPlay muted loop poster="/images/project/icb/patternsPoster.png" >
        <source src="/images/project/icb/patterns.webm" type="video/webm" /> 
        <source src="/images/project/icb/patterns.mp4" type="video/mp4" />
    </video>
    )

export const MockUp = <Image width="730" height="548"
src="/images/projects/icb/Horizontal.jpg" title='App Screens' 
description="The Infinite Coloring Book App Screens"
alt="The Infinite Coloring Book App Screens"
/> 

export const InfiniteCombinations = <Image width="730" height="548"
src="/images/projects/icb/InfiniteCombinations.jpg" title='Infinite Pattern Combinations' 
description="Some Different patterns made using the infinite coloring book"
alt="Some Different patterns made using the infinite coloring book"
/> 

export const Ipad = <Image width="800" height="533"
src="/images/projects/icb/mumDaughterIpad.jpg" title='Infinite Coloring Book on Ipad' 
description="A mother and daughter coloring in a pattern made using the infinite coloring book"
alt="A mother and daughter coloring in a pattern made using the infinite coloring book"
/>

export const KidsTopdown = <Image width={800} height={600}
src="/images/projects/icb/icb-kids-topdown.jpg" title='Child Coloring in a Pattern' 
description="Child Coloring an Infinite Coloring Book Pattern"
alt="Child Coloring an Infinite Coloring Book Pattern"
/> 

export const KidsBoth = <Image width={800} height={600}
src="/images/projects/icb/icb-kids-both.jpg" title='Two Children Coloring' 
description="Two Children Coloring in patterns made with The Infinite Coloring Book"
alt="Two Children Coloring in patterns made with The Infinite Coloring Book"
/> 

export const KidsClose= <Image width={800} height={600}
src="/images/projects/icb/icb-kids-close.jpg" title='Close up of Coloring In' 
description="A close up of a child coloring in a pattern from the infinite coloring book"
alt="A close up of a child coloring in a pattern from the infinite coloring book"
/> 