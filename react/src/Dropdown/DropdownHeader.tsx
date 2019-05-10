import "vicui-core/styles/dropdown.pcss";

import pickClass from "../utils/pickClass";
import styled from "styled-components";
import { Box, BoxProps } from "..";

export interface DropdownHeaderProps extends BoxProps {

}

export const DropdownHeader = pickClass(styled(Box) <DropdownHeaderProps>`
`)("dropdown__header");

DropdownHeader.defaultProps = {
  as: "h6",
};

export default DropdownHeader;
