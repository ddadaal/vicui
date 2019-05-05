import variables, { boxShadows } from "./variables";

export const borders = [
  { borderWidth: "1px", borderStyle: "solid "},
];

export const theme = (v: typeof variables) => ({
  name: "default",
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  cards: {
    card: {
      backgroundColor: v.cards.card.bg,
      ...borders[0],
      borderColor: v.cards.card.borderColor,
      "&:hover": {
        "box-shado": boxShadows[0],
        transform: "translate3d(0, -4px, 0)",
      },
    },
    header: {
      backgroundColor: v.cards.header.bg,
    },
  },
  tags: {
    normal: {
      backgroundColor: v.tags.normal.bg,
      color: v.tags.normal.fontColor,
    },
    info: {
      backgroundColor: v.tags.info.bg,
      color: v.tags.info.fontColor,
    },
  },
  buttons: {
    common: {
      ...borders[0],
      borderColor: v.buttons.borderColor,
      "&:hover,&:focus": {
        opacity: 0.9,
      },
      "&:active": {
        opacity: 0.8,
      },
    },
    default: {
      backgroundColor: v.buttons.default.bg,
      color: v.buttons.default.fontColor,
    },
    primary: {
      backgroundColor: v.buttons.primary.bg,
      color: v.buttons.primary.fontColor,
    },
  },
  inputs: {
    input: {
      ...borders[0],
      borderColor: v.inputs.input.normalBorderColor,
      "&:hover": {
        borderColor: v.inputs.input.hoverBorderColor,
      },
      "&:active,&:focus": {
        borderColor: v.inputs.input.activeBorderColor,
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
});

export { variables };
