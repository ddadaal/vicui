import React, { useState } from "react";

import { storiesOf } from "@storybook/react";

import {
  Dropdown, Button, DropdownHeader, DropdownItem, DropdownDivider, useDropdown, Flexbox, Box,
} from "../src";

function Items() {
  return (
    <>
      <DropdownHeader>Header</DropdownHeader>
      <DropdownItem>Item 1</DropdownItem>
      <DropdownItem active={true}>Item 2</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Item 3</DropdownItem>
    </>
  );
}

storiesOf("Dropdown", module)
  .add("Dropdown Menu", () => {
    const { toggle, open } = useDropdown(false);

    return (
      <Dropdown trigger={
        <Button variant="primary" onClick={toggle}>Dropdown here</Button>
      } open={open}>
        <Items />
      </Dropdown>
    );
  })
  .add("Multiple menus", () => {

    const { toggle: toggle1, open: open1 } = useDropdown(false);
    const { open: open2, setOpen: setOpen2 } = useDropdown(false);

    return (
      <Box maxWidth="500px">
        <Dropdown trigger={
          <Button variant="primary" onClick={toggle1}>Dropdown here</Button>
        } open={open1}>
          <Items />
        </Dropdown>
        <Dropdown trigger={
          <Button variant="primary" onClick={setOpen2(!open2)}>Dropdown here</Button>
        } open={open2} menuAlignment="right">
          <Items />
        </Dropdown>
      </Box>
    );
  });
