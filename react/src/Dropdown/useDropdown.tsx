import React, { useState, useCallback } from "react";
import { useEventListener } from "../utils/hooksUtils";

export interface DropdownData {
  toggle: (e: { stopPropagation: () => void }) => void;
  open: boolean;
}

export function useDropdown(defaultOpen: boolean = false): DropdownData {

  const [open, setOpen] = useState(defaultOpen);
  const toggle = useCallback((e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setOpen(!open);
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEventListener(window, "click", close);
  useEventListener(window, "touchstart", close);

  return {
    toggle,
    open,
  };
}
