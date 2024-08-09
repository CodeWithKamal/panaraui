import React from "react";
import PropTypes from "prop-types";

/**
 * GestureDetector component mimicking Flutter's GestureDetector widget.
 * The GestureDetector component provides event handlers for various gestures.
 *
 * @param {object} props - The properties object.
 * @param {React.ReactNode} props.child - The content to be rendered inside the GestureDetector.
 * @param {function} [props.onTap] - Handler for tap (click) events.
 * @param {function} [props.onDoubleTap] - Handler for double-tap (double-click) events.
 * @param {function} [props.onLongPress] - Handler for long press events.
 * @param {function} [props.onMouseEnter] - Handler for mouse enter events.
 * @param {function} [props.onMouseLeave] - Handler for mouse leave events.
 * @param {function} [props.onMouseDown] - Handler for mouse down events.
 * @param {function} [props.onMouseUp] - Handler for mouse up events.
 *
 * @returns {JSX.Element} The rendered GestureDetector component.
 */
const GestureDetector = ({
  child,
  onTap,
  onDoubleTap,
  onLongPress,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
}) => {
  let timer = null;

  const handleMouseDown = (e) => {
    if (onLongPress) {
      timer = setTimeout(() => {
        onLongPress(e);
      }, 500);
    }
    if (onMouseDown) {
      onMouseDown(e);
    }
  };

  const handleMouseUp = (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    if (onMouseUp) {
      onMouseUp(e);
    }
  };

  const handleClick = (e) => {
    if (onTap) {
      onTap(e);
    }
  };

  const handleDoubleClick = (e) => {
    if (onDoubleTap) {
      onDoubleTap(e);
    }
  };

  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        cursor: "pointer",
        userSelect: "none",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      {child}
    </div>
  );
};

// Prop types for the GestureDetector component
GestureDetector.propTypes = {
  child: PropTypes.node.isRequired,
  onTap: PropTypes.func,
  onDoubleTap: PropTypes.func,
  onLongPress: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
};

export default GestureDetector;
