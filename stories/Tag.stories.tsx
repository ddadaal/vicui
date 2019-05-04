import React from "react";

import { storiesOf } from "@storybook/react";
import { Tag } from "../src/Tag";

storiesOf("Tag", module)
  .add("Tag", () => (
    <div>
      <Tag>Normal Tag</Tag>
      <Tag variant="info">Info Tag</Tag>
    </div>
  ))
  .add("Tag With Info Number", () => (
    <Tag>
      JavaScript
      <Tag ml={1} variant={"info"}>1</Tag>
    </Tag>
  ));
