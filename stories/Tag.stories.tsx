import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Tag } from "../src/Tag";

storiesOf("Tag", module)
  .add("Tag", () => (
    <Tag>Normal Tag</Tag>
  ))
  .add("Tag With Info Number", () => (
    <Tag>
      Tag with number
      <Tag ml="2px" p="2px" color={"info"}>1</Tag>
    </Tag>
  ));
