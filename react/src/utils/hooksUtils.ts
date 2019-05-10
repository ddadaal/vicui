import React, { useEffect } from "react";

export function useEventListener<R extends HTMLElement, K extends keyof HTMLElementEventMap>(
  ref: React.RefObject<R>,
  eventType: K,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
) {
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(eventType, listener, options);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener(eventType, listener, options);
      }
    };
  });
}
