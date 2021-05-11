import React, {useState}  from "react";

import Switch from './switch';
import {useTheme} from '../../../styles/ThemeContext';


const ThemeSwitch = () => {
  const {toggle, theme} = useTheme();
  const [themeSwitch, setThemeSwitch] = useState(theme === "dark");
  
  const switchTheme = () => {
    setThemeSwitch(prevState => !prevState);
    toggle();
  }

    return (
        <Switch isOn={themeSwitch} click={switchTheme}/>
    )
};

export default ThemeSwitch;