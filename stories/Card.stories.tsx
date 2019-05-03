import React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Card, CardBody } from "../src/Card";

storiesOf("Card", module)
  .add("Normal Card", () => (
    <Card>
      <CardBody>
        <CardBody>
          This is the body of the card.
        </CardBody>
      </CardBody>
    </Card>
  ));
