import React, { useMemo, useState } from "react";
import { usePopper } from "react-popper";
import { string } from "prop-types";

import { useContextMenu } from "./use-context-menu";

const ContextDropdown = (props) => {
  const { targetElement } = props;
  const [popperElement, setPopperElement] = useState(null);
  const [isOpen, position, handleOnChange] = useContextMenu(
    targetElement,
    popperElement
  );
  const virtualReference = useMemo(
    () => ({
      getBoundingClientRect: () => ({
        top: position.top,
        left: position.left,
        width: 2,
        height: 2
      })
    }),
    [position]
  );
  const { styles, attributes } = usePopper(virtualReference, popperElement);

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

ContextDropdown.propTypes = {
  targetElement: string
};

export default ContextDropdown;
