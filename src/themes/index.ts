import { theme, variables } from "./default";
import ThemeProvider from "./ThemeProvider";

const defaultTheme = theme(variables);

export type Theme = typeof defaultTheme;

export { ThemeProvider, defaultTheme };
