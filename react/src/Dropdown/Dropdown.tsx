import React, { forwardRef, PropsWithChildren, useRef } from "react";
import "vicui-core/styles/dropdown.pcss";
import pickClass from "../utils/pickClass";
import { Flexbox, FlexboxProps } from "../primitives";
import DropdownMenu from "./DropdownMenu";

type MenuAlignment = "left" | "right";

export interface DropdownProps extends FlexboxProps {
  trigger: React.ReactNode;
  open?: boolean;
  className?: string;
  menuAlignment?: MenuAlignment;
}

export const Dropdown = pickClass<DropdownProps>(
  ({ children, open, trigger, className, menuAlignment }) => {
    return (
      <Flexbox
        flexDirection="column"
        alignItems={menuAlignment === "right" ? "flex-end" : "flex-start"}
        className={className}
      >
        {trigger}
        <DropdownMenu show={open}>
          {children}
        </DropdownMenu>
      </Flexbox>
    );
  })("dropdown");

Dropdown.defaultProps = {
  open: false,
  menuAlignment: "left",
};

export default Dropdown;
