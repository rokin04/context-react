import React, { useState, useCallback, useEffect } from "react";

export const useContextMenu = (targetElement, popperElement) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleOnContextMenu = useCallback((e) => {
    e.preventDefault();
    setIsOpen(true);
    setPosition({ left: e.pageX, top: e.pageY });
  }, []);

  const handleOnChange = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleClick = useCallback(
    (e) => {
      if (popperElement && !popperElement.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [setIsOpen, popperElement]
  );

  useEffect(() => {
    const target = document.querySelector(targetElement);

    document.addEventListener("click", handleClick);
    target && target.addEventListener("contextmenu", handleOnContextMenu);

    return () => {
      document.removeEventListener("click", handleClick);
      target && target.removeEventListener("contextmenu", handleOnContextMenu);
    };
  }, [handleOnContextMenu, handleClick, targetElement]);

  return [isOpen, position, handleOnChange];
};
