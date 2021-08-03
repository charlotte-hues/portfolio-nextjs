const transition = "1s ease-out";
const transitions = {
    all: `all ${transition}`,
    color: `color ${transition}`,
    background: `background-color 0.5s ease-out`,
    fill: `fill ${transition}`,
    border: `border ${transition}`,
    stroke: `stroke ${transition}, stroke-color ${transition}, -webkit-text-stroke-color ${transition}, -moz-text-stroke-color ${transition}` 
}

const WHITE = "#FAF9FB";
const DULL_WHITE = "#E5E9F0";

const DARK_BLUE = "#2E3440";

const PINK = "#C2A3BC";
const DARK_PINK = "#8B5A82";

export const lightTheme = {
    colors: {
        background: WHITE,
        
        primary: DARK_BLUE,
        highlight: DARK_PINK,
    },
    transition: {...transitions  },
};


export const darkTheme = {
    colors: {
        background: DARK_BLUE,
        primary: PINK,
        highlight: DULL_WHITE,
    },
    transition: {...transitions  },
};
