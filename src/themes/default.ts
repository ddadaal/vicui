const palette = {
  white: "#fff",
  grays: [
    "#f8f9fa",
    "#ecf0f1",
    "#dee2e6",
    "#ced4da",
    "#b4bcc2",
    "#95a5a6",
    "#7b8a8b",
    "#343a40",
    "#212529",
  ],
  blacks: [
    "rgba(0,0,0,1)",
    "rgba(0,0,0,0.875)",
    "rgba(0,0,0,0.75)",
    "rgba(0,0,0,0.625)",
    "rgba(0,0,0,0.5)",
    "rgba(0,0,0,0.375)",
    "rgba(0,0,0,0.25)",
    "rgba(0,0,0,0.125)",
  ],
  blue: "#2C3E50",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#e83e8c",
  red: "#E74C3C",
  orange: "#fd7e14",
  yellow: "#F39C12",
  green: "#18BC9C",
  teal: "#20c997",
  cyan: "#3498DB",
};

const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`,
];

export default {
  name: "default",
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },  
  colors: {
    palette,
    card: {
      bg: palette.white,
      border: palette.blacks[7],
      onHoverBoxShadow: boxShadows[2],
      header: {
        bg: palette.blacks[7],
        borderBottom: palette.blacks[7],
      },
    },
    tag: {
      normal: {
        bg: palette.grays[1],
        hoverBg: palette.grays[3],
        fontColor: palette.blacks[0],
      },
      info: {
        bg: palette.cyan,
        fontColor: palette.white,
      },
    },
  },
  animations: {
    durations: {
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

  },
  fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64, 96 ],
};
