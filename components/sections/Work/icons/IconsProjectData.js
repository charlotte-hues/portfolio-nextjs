import * as LawIcons from "./lawIcons";
import * as MorphIcon from "./3dMorphIcon";
import * as LollyIce from './LollyIce';
import * as Fruit from './fruitIcons';
import * as Jacobs from './jacobsIcons';

const iconData = {  
  jacobs: {
    icons: Jacobs,
    lightMode: {icon: "#FFFFFF", background: "#001489"},
    darkMode: {icon: "#001489", background: "#FFFFFF"},
    size: "32px",
  },
  fruit: {
    icons: Fruit, 
    lightMode: {icon: "#E04880", background: "#FFDEDE"},
    darkMode: {icon: "#E04880", background: "#FFFFFF"},
    size: "46px",
  },
  law: {
    icons: LawIcons,
    lightMode: {icon: "#626B7C", background: "#C6CFE0"},
    darkMode: {icon: "#9C9C9C", background: "#FFFFFF"},
    size: "40px",
  },
  lollyIce: {
    icons: LollyIce,
    lightMode: {icon: "#1ADBC4", background: "#D9F2EF"},
    darkMode: {icon: "#1ADBC4", background: "#FFFFFF"},    
    size: "80px",
  },
  morph: {
    icons: MorphIcon,
    lightMode: {icon: "#ff4949", background: "#222222"},
    darkMode: {icon: "#ff4949", background: "#FFFFFF"},
    size: "200px",
  },
};

export default iconData;