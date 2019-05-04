import React from "react";

import { storiesOf } from "@storybook/react";

import { Button } from "../src/Button";

storiesOf("Button", module)
  .add("Buttons", () => (
    <div>
      <Button>Default Button</Button>
      <Button variant="primary">Primary Button</Button>
    </div>
  ));
