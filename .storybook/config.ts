import { configure } from "@storybook/react";
// automatically import all files ending in *.stories.tsx
import {addDecorator} from "@storybook/react";
import {withThemesProvider} from "storybook-addon-styled-component-theme";
import { withInfo } from "@storybook/addon-info";

import { defaultTheme} from "../src/themes";
 
const req = require.context("../stories", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

const themes = [defaultTheme];

addDecorator(withInfo({ inline: true }));
addDecorator(withThemesProvider(themes));

configure(loadStories, module);
