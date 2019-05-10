import React, { forwardRef, PropsWithChildren } from "react";
import "vicui-core/styles/dropdown.pcss";
import pickClass from "../utils/pickClass";
import { Box } from "..";
import { BoxProps } from "../primitives";

export interface DropdownProps extends BoxProps {
  menu: React.ReactNode;
  open?: boolean;
  className?: string;
}

const MenuContainer = forwardRef<HTMLDivElement, PropsWithChildren<{ className?: string, open?: boolean }>>(
  ({ className, open, children }, ref) => {
    return (
      <Box display={open ? "block" : "none"} ref={ref} className={className}>
        {children}
      </Box>
    );
  },
);

export const Dropdown = pickClass<DropdownProps>(({ children, open, menu, className }) => {
  const menuRef = React.useRef<HTMLDivElement>(null);
  return (
    <Box className={className}>
      {children}
      <MenuContainer open={open} ref={menuRef}>
        {menu}
      </MenuContainer>
    </Box>
  );
})("dropdown");

Dropdown.defaultProps = {
  open: false,
};

export default Dropdown;
