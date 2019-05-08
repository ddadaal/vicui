import React from "react";

import { storiesOf } from "@storybook/react";

import { Card, CardBody, CardHeader, Flexbox } from "../src";

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
  .add("Multi Cards in a Row", () => {

    const buildCard = (i: number) => (
      <Card key={i} m={2}>
        <CardBody>Card {i}</CardBody>
      </Card>
    );

    return (
      <Flexbox flex={[1, 1, 300]}>
        {[1, 2, 3, 4, 5].map(buildCard)}
      </Flexbox>
    );
  })
  ;
