import React, { useState, useEffect} from "react";
import { ThemeProvider } from 'styled-components';

import {lightTheme, darkTheme} from './theme';

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [mountedComponent, setMountedComponent] = useState(false)

    const themeMode = theme ==='light' ? lightTheme : darkTheme;

    const setMode = mode => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };

    const toggle = () => {
        theme === "light" ? setMode('dark') : setMode('light');
    };

    

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setMode(localTheme);
        setMountedComponent(true)
    }, []);

    return (
        <ThemeToggleContext.Provider value={{ toggle: toggle, mountedComponent: mountedComponent, theme: theme }}>
            <ThemeProvider theme={themeMode}>
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    )
}

export default ThemeProvider;