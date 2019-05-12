import React, { forwardRef, PropsWithChildren, useRef } from "react";
import "vicui-core/styles/dropdown.pcss";
import pickClass from "../utils/pickClass";
import { Box, BoxProps } from "../primitives";
import DropdownMenu from "./DropdownMenu";

type MenuAlignment = "left" | "right";

export interface DropdownProps extends BoxProps {
  trigger: React.ReactNode;
  open?: boolean;
  className?: string;
  menuAlignment?: MenuAlignment;
}

export const Dropdown = pickClass<DropdownProps>(
  ({ children, open, trigger, className, menuAlignment }) => {

    const menuRef = useRef<HTMLDivElement>(null);

    return (
      <Box
        className={className}
      >
        {trigger}
        <DropdownMenu show={open} ref={menuRef}>
          {children}
        </DropdownMenu>
      </Box>
    );
  })("dropdown");

Dropdown.defaultProps = {
  open: false,
  menuAlignment: "left",
};

export default Dropdown;
