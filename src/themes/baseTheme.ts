import { ColorMode } from ".";
import { boxShadows, palette } from "./common";

export default (color: ColorMode) => ({
  name: "default",
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  colors: {
    ...palette,
  },
  cards: {
    card: {
      backgroundColor: color.cards.card.backgroundColor,
      border: color.cards.card.border,
      boxShadow: boxShadows[0],
    },
    header: {
      backgroundColor: color.cards.header.backgroundColor,
      borderBottom: color.cards.header.borderBottom,
    },
  },
  tags: {
    normal: {
      backgroundColor: color.tags.normal.backgroundColor,
      color: color.tags.normal.color,
    },
    info: {
      backgroundColor: color.tags.info.backgroundColor,
      color: color.tags.info.color,
    },
  },
  buttons: {
    default: {
      backgroundColor: color.buttons.default.backgroundColor,
      color: color.buttons.default.color,
    },
    primary: {
      backgroundColor: color.buttons.primary.backgroundColor,
      color: color.buttons.primary.color,
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
    normalTransition: {
      transition: `all 150ms ease-in-out`,
    },
  },
  fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64, 96 ],
  space: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
});
