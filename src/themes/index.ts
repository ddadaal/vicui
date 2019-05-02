import defaultTheme from "./default";
import baseStyled, { ThemedStyledInterface } from 'styled-components';
import ThemeProvider from "./ThemeProvider";

type Theme = typeof defaultTheme;
const styled = baseStyled as ThemedStyledInterface<Theme>;

export { defaultTheme, Theme, styled, ThemeProvider };
