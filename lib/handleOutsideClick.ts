"use client";
import { useEffect } from "react";

export function useHandleOutsideClick(
  isOpen: boolean | string | null,
  setIsOpen: any,
  id: string,
) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const targetElement = event.target as Element;
      if (!targetElement.closest("." + id)) {
        setIsOpen(null);
        return;
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen, setIsOpen, id]);
}
