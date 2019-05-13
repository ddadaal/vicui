import "vicui-core/styles/dropdown.pcss";

import pickClass from "../utils/pickClass";
import styled from "styled-components";
import { Box, BoxProps } from "../primitives";

export interface DropdownItemProps extends BoxProps {
  active?: boolean;
}

export const DropdownItem = pickClass(styled(Box) <DropdownItemProps>`
`)("dropdown__item", (props) => props.active ? "active" : "");

DropdownItem.defaultProps = {
  as: "a",
  active: false,
};

export default DropdownItem;
