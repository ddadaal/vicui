import { palette } from "../common";

export default {
  cards: {
    card: {
      backgroundColor: palette.white,
      border: palette.black[7],
    },
    header: {
      backgroundColor: palette.black[7],
      borderBottom: palette.black[7],
    },
  },
  tags: {
    normal: {
      backgroundColor: palette.gray[1],
      color: palette.black[0],
    },
    info: {
      backgroundColor: palette.cyanBlue[0],
      color: palette.white,
    },
  },
  buttons: {
    default: {
      backgroundColor: palette.gray[1],
      color: palette.black[0],
    },
    primary: {
      backgroundColor: palette.cyanBlue[0],
      color: palette.white,
    },
  },
};
