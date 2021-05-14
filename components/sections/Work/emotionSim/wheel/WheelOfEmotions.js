import Image from 'next/image';

import FlexContainer from '../../../../ui/project/FlexContainer';
import IntensityKey from './IntensityKey';

const WheelOfEmotion = (
    <FlexContainer >
        <IntensityKey/>
        <div style={{ width: "100%", height: "auto"}}>
            <Image
            src='/images/projects/emotionSim/WheelOfEmotions-charlottehughes.png' title='Wheel of Emotions' 
            description="Visualisation of Plutchik's wheel of emotions"
            alt="Visualisation of Plutchik's wheel of emotions" 
            layout="responsive"
            width={600}
            height={600}
            />
        </div>
    </FlexContainer>
);

export default WheelOfEmotion;