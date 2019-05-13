import React, { useEffect } from "react";

export function useEventListener<R extends EventTarget, K extends keyof HTMLElementEventMap>(
  element: R,
  eventType: K,
  listener: (this: R, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
) {
  useEffect(() => {
    element.addEventListener(eventType, listener, options);

    return () => {
      element.removeEventListener(eventType, listener, options);

    };
  }, [element, eventType, listener, options]);
}
