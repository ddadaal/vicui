import React, { useState, useCallback, useRef } from "react";
import { useEventListener } from "../utils/hooksUtils";

let dropdownStack = [] as ({ close: () => void, ref: React.RefObject<HTMLDivElement> })[];

export interface DropdownData {
  toggle: () => void;
  open: boolean;
  ref: React.RefObject<HTMLDivElement>;
}

export default function useDropdown(defaultOpen: boolean = false): DropdownData {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(defaultOpen);
  const toggle = useCallback(() => {
    if (!open) {
      dropdownStack.push({
        close: () => setOpen(false),
        ref,
      });
      setOpen(true);
    } else {
      dropdownStack = dropdownStack.filter((x) => x.ref === ref);
      setOpen(false);
    }
  }, [open, dropdownStack]);

  const closeTopDropdownStack = useCallback((e: MouseEvent) => {
    const top = dropdownStack.pop();
    if (top) {
      top.close();
    }
  }, []);

  // useEventListener(window, "onclick", closeTopDropdownStack);
  // useEventListener(window, "ontouchstart", closeTopDropdownStack);

  return {
    toggle,
    ref,
    open,
  };
}
