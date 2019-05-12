import React, { useState } from "react";

import { storiesOf } from "@storybook/react";

import {
  Dropdown, Button, DropdownMenu, DropdownHeader, DropdownItem, DropdownDivider, useDropdown, Flexbox,
} from "../src";

function ControlledDropdownDemo() {
  const { toggle, open } = useDropdown(false);

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
      <Button variant="primary" onClick={toggle}>Dropdown here</Button>
    </Dropdown>
  );
}

storiesOf("Dropdown", module)
  .add("Dropdown Menu", () => {
    const { toggle, open } = useDropdown(false);

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
        <Button variant="primary" onClick={toggle}>Dropdown here</Button>
      </Dropdown>
    );
  })
  .add("Multiple menus", () => (
    <div>
      <ControlledDropdownDemo />
      <Flexbox flexDirection="row-reverse">
        <ControlledDropdownDemo />
      </Flexbox>
    </div>
  ));
