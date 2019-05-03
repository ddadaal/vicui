import defaultTheme from "./default";
import baseStyled, { ThemedStyledInterface } from "styled-components";
import ThemeProvider from "./ThemeProvider";

export type Theme = typeof defaultTheme;
const styled = baseStyled as ThemedStyledInterface<Theme>;

export { defaultTheme, styled, ThemeProvider };
