import React, { useState, useCallback, useRef } from "react";
import { useEventListener } from "../utils/hooksUtils";

interface StoppableEvent {
  stopPropagation(): void;
}

export interface DropdownData {
  toggle: (e: StoppableEvent) => void;
  open: boolean;
}

export function useDropdown(defaultOpen: boolean = false): DropdownData {

  const [open, setOpen] = useState(defaultOpen);
  const toggle = useCallback((e: StoppableEvent) => {
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
