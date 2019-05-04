import React from "react";

import { storiesOf } from "@storybook/react";

import { Button } from "../src";

storiesOf("Button", module)
  .add("Buttons", () => (
    <div>
      <Button m={1}>Default Button</Button>
      <Button variant="primary" m={1}>Primary Button</Button>
    </div>
  ));
