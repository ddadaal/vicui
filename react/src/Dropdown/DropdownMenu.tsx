import pickClass from "../utils/pickClass";
import styled from "styled-components";
import { Box, BoxProps } from "..";
import React, { Ref } from "react";

export interface DropdownMenuProps extends BoxProps {
  show?: boolean;
  divRef?: React.Ref<HTMLDivElement>;
  className?: string;
}

export const DropdownMenu = pickClass<DropdownMenuProps>((props) => (
  <Box {...props} ref={props.divRef} />
))("dropdown__menu", (props) => {
  return props.show ? "show" : undefined;
});

DropdownMenu.defaultProps = {
  show: true,
};

export default DropdownMenu;
