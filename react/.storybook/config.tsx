import { configure } from "@storybook/react";
// automatically import all files ending in *.stories.tsx
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { withInfo } from "@storybook/addon-info";
import React from "react";

import { ThemeProvider } from "../src";

const req = require.context("../stories", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withInfo({ inline: true }));
addDecorator((Story: any) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
));

configure(loadStories, module);
