import pickClass from "../utils/pickClass";
import styled from "styled-components";
import { Box, BoxProps } from "../primitives";

export interface DropdownMenuProps extends BoxProps {
  show?: boolean;
  className?: string;
}

export const DropdownMenu = pickClass(styled(Box) <DropdownMenuProps>`
`)("dropdown__menu", (props) => {
  return props.show ? "show" : undefined;
});

DropdownMenu.defaultProps = {
  show: true,
};

export default DropdownMenu;
