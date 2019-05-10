import React, { useState } from "react";

import { storiesOf } from "@storybook/react";

import { Dropdown, Button, DropdownMenu, DropdownHeader, DropdownItem, DropdownDivider, Flexbox } from "../src";

function ControlledDropdownDemo() {
  const [open, setOpen] = useState(true);

  return (
    <Dropdown menu={
      <DropdownMenu>
        <DropdownHeader>Header</DropdownHeader>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem active={true}>Item 2</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Item 3</DropdownItem>
      </DropdownMenu>
    } open={open}>
      <Button variant="primary" onClick={() => setOpen(!open)}>Dropdown here</Button>
    </Dropdown>
  );
}

storiesOf("Dropdown", module)
  .add("Dropdown Menu", () => (
    <div>
      <ControlledDropdownDemo />
      <Flexbox flexDirection={"row-reverse"}>
        <ControlledDropdownDemo />
      </Flexbox>

    </div>
  ));
