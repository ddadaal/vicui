import { useState, useCallback } from "react";
import { useEventListener } from "../utils/hooksUtils";

interface StoppableEvent {
  stopPropagation(): void;
}

export interface DropdownControl {
  open: boolean;
  setOpen: (open: boolean) => (e: StoppableEvent) => void;
  toggle: (e: StoppableEvent) => void;
}

export function useDropdown(defaultOpen: boolean = false): DropdownControl {

  const [open, setOpen] = useState(defaultOpen);

  // the event of toggle must be stopped to prevent it from reaching window
  // where window would close the menu
  const wrappedSetOpen = useCallback((open: boolean) => (e?: StoppableEvent) => {
    if (e) {
      e.stopPropagation();
    }
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
