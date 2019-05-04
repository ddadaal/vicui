import { boxShadows, palette } from "./common";

const defaultTheme = {
  name: "default",
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  colors: palette,
  cards: {
    card: {
      backgroundColor: palette.white,
      border: `1px solid ${palette.gray[2]}`,
    },
    header: {
      backgroundColor: palette.gray[1],
      borderBottom: palette.black[7],
    },
  },
  tags: {
    normal: {
      backgroundColor: palette.gray[2],
      color: palette.black[0],
    },
    info: {
      backgroundColor: palette.cyanBlue[0],
      color: palette.white,
    },
  },
  buttons: {
    common: {
      border: `1px solid ${palette.gray[2]}`,
    },
    default: {
      backgroundColor: palette.white,
      color: palette.black[0],
      "&:hover,&:focus": {
        backgroundColor: palette.gray[2],
      },
      "&:active": {
        backgroundColor: palette.gray[3],
      },
    },
    primary: {
      backgroundColor: palette.cyanBlue[0],
      color: palette.white,
      "&:hover,&:focus": {
        opacity: 0.9,
      },
      "&:active": {
        opacity: 0.8,
      },
    },
  },
  animations: {
    durations: {
      faster: "60ms",
      fast: `150ms`,
      normal: `300ms`,
      slow: `450ms`,
      slowest: `600ms`,
    },
    transitionDelays: {
      small: `60ms`,
      medium: `160ms`,
      large: `260ms`,
      xLarge: `360ms`,
    },
    normalTransition: {
      transition: `all 150ms ease-in-out`,
    },
  },
  fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64, 96 ],
  space: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
  boxShadows,
};

export default defaultTheme;
