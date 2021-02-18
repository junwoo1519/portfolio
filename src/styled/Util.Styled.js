export const pxToRem = val => (`${val / 16}rem`);

export const setBoxShadow = (level = 1) => {
    if (level === 1) {
        return "1px 1px 10px rgba(0, 0, 0, .15)";
    } else if (level === 2) {
        return "1px 1px 10px rgba(0, 0, 0, .15)";
    } else if (level === 3) {
        return "1px 1px 10px rgba(0, 0, 0, .15)";
    }
}

