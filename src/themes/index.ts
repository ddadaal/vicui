import baseTheme from "./baseTheme";
import light from "./colors/light";
import ThemeProvider from "./ThemeProvider";

export type BaseTheme = typeof baseTheme;
export type ColorMode = typeof light;

export const defaultTheme = baseTheme(light);

export type Theme = typeof defaultTheme;

export { ThemeProvider };
