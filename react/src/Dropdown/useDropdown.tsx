import React, { useState, useCallback, useRef } from "react";
import { useEventListener } from "../utils/hooksUtils";

interface StoppableEvent {
  stopPropagation(): void;
}

export interface DropdownData {
  open: boolean;
  setOpen: (open: boolean) => (e: StoppableEvent) => void;
  toggle: (e: StoppableEvent) => void;
}

export function useDropdown(defaultOpen: boolean = false): DropdownData {

  const [open, setOpen] = useState(defaultOpen);

  const wrappedSetOpen = useCallback((open: boolean) => (e: StoppableEvent) => {
    e.stopPropagation();
    setOpen(open);
  }, [setOpen]);

  const toggle = useCallback((e: StoppableEvent) => {
    wrappedSetOpen(!open)(e);
  }, [open, wrappedSetOpen]);

  const close = useCallback((e: MouseEvent | TouchEvent) => {
    setOpen(false);
  }, [setOpen]);

  useEventListener(window, "click", close);
  useEventListener(window, "touchstart", close);

  return {
    toggle,
    setOpen: wrappedSetOpen,
    open,
  };
}
