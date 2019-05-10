import pickClass from "../utils/pickClass";
import styled from "styled-components";
import { Box, BoxProps } from "..";

export interface DropdownMenuProps extends BoxProps {

}

export const DropdownMenu = pickClass(styled(Box)<DropdownMenuProps>`
`)("dropdown__menu show");

export default DropdownMenu;
