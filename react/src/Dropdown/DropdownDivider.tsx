import "vicui-core/styles/dropdown.pcss";

import pickClass from "../utils/pickClass";
import styled from "styled-components";
import { Box, BoxProps } from "..";

export interface DropdownDividerProps extends BoxProps {

}

export const DropdownDivider = pickClass(styled(Box) <DropdownDividerProps>`
`)("dropdown__divider");

DropdownDivider.defaultProps = {
};

export default DropdownDivider;
