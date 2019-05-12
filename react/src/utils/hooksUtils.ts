import React, { useEffect } from "react";

export function useEventListener<R extends Element | Window, K extends keyof HTMLElementEventMap>(
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
  });
}
