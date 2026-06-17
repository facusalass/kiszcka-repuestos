"use client";

import { useEffect } from "react";

export function TouchInteractions() {
  useEffect(() => {
    if (!window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return;
    }

    const clearActive = () => {
      document.querySelectorAll<HTMLElement>("[data-tap-card].tap-active").forEach((element) => {
        element.classList.remove("tap-active");
      });
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const card = target?.closest<HTMLElement>("[data-tap-card]");

      if (!card) {
        clearActive();
        return;
      }

      const wasActive = card.classList.contains("tap-active");
      clearActive();

      if (!wasActive) {
        card.classList.add("tap-active");
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
