import React from "react";

import { storiesOf } from "@storybook/react";

import { Card, CardBody, CardHeader } from "../src/Card";
import { Box } from "../src/Box";

storiesOf("Card", module)
  .add("Normal Card", () => (
    <Card>
      <CardBody>
          This is the body of the card.
      </CardBody>
    </Card>
  ))
  .add("Card with header", () => (
    <Card>
      <CardHeader>🏷️ Card Header</CardHeader>
      <CardBody>Body of the card</CardBody>
    </Card>
  ))
  .add("Limited-Width Multi Cards in a Row", () => {

    const buildCard = (i: number) => (
      <Card key={i} maxWidth="300px" m={2}>
        <CardBody>Card {i}</CardBody>
      </Card>
    );

    return (
      <Box>
        {[1, 2, 3, 4, 5].map(buildCard)}
      </Box>
    );
  })
  ;
