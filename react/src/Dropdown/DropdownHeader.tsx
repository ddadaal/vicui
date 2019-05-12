import "vicui-core/styles/dropdown.pcss";

import pickClass, { HasClassname } from "../utils/pickClass";
import styled from "styled-components";
import { Box, BoxProps } from "..";

export interface DropdownHeaderProps extends BoxProps, HasClassname {

}

styled

export const DropdownHeader = pickClass<DropdownHeaderProps>(Box)("dropdown__header");

DropdownHeader.defaultProps = {
  as: "h6",
};

export default DropdownHeader;
