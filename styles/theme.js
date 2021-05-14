const transition = "1s ease-out";
const transitions = {
    all: `all ${transition}`,
    color: `color ${transition}`,
    background: `background-color 0.5s ease-out`,
    fill: `fill ${transition}`,
    border: `border ${transition}`,
    stroke: `stroke ${transition}, stroke-color ${transition}, -webkit-text-stroke-color ${transition}, -moz-text-stroke-color ${transition}` 
}

export const lightTheme = {
    colors: {
        background: "#FAF9FB",
        primary: "#2E3440",
        secondary: "#2E3440",
        highlight: '#8B5A82',
    },
    transition: {...transitions  },
};


export const darkTheme = {
    colors: {
        background: "#2E3440",
        primary: "#C2A3BC",
        secondary: "#7E6A81",
        highlight: '#E5E9F0',
    },
    transition: {...transitions  },
};
