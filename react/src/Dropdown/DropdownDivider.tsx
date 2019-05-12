import "vicui-core/styles/dropdown.pcss";

import pickClass, { HasClassname } from "../utils/pickClass";
import styled from "styled-components";
import { Box, BoxProps } from "..";

export interface DropdownDividerProps extends BoxProps, HasClassname {

}

export const DropdownDivider = pickClass<DropdownDividerProps>(Box)("dropdown__divider");

DropdownDivider.defaultProps = {
};

export default DropdownDivider;
