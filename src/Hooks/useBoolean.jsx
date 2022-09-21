import React from "react";
import { useState } from "react";

function useBoolean(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  function toggle() {
    return setIsOpen(!isOpen);
  }
  return { toggle, isOpen };
}

export default useBoolean;
