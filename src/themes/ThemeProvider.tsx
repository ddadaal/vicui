import React from "react";
import { Theme, defaultTheme } from '.';
import { ThemeProvider as BaseThemeProvider, DefaultTheme } from "styled-components";

interface Props {
  theme?: Theme;
  children?: React.ReactNode;
}

export default function ThemeProvider(props: Props) {
  return (
    <BaseThemeProvider theme={props.theme as DefaultTheme}>
      {props.children as any}
    </BaseThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  theme: defaultTheme
};
