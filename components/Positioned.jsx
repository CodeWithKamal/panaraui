import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";
/**
 * Positioned component mimicking Flutter's Positioned widget using absolute positioning CSS.
 * The Positioned component positions its child within a Stack according to the given values.
 *
 * @param {object} props - The properties object.
 * @param {string | number} [props.top] - The top position.
 * @param {string | number} [props.bottom] - The bottom position.
 * @param {string | number} [props.left] - The left position.
 * @param {string | number} [props.right] - The right position.
 * @param {React.ReactNode} props.child - The content to be positioned.
 *
 * @returns {JSX.Element} The rendered Positioned component.
 */
const Positioned = ({ top, bottom, left, right, child }) => {
  // Generate the style object based on props
  const style = {
    position: "absolute",
    top: typeof top === "number" ? `${top}px` : top,
    bottom: typeof bottom === "number" ? `${bottom}px` : bottom,
    left: typeof left === "number" ? `${left}px` : left,
    right: typeof right === "number" ? `${right}px` : right,
  };

  // Remove undefined values from the style object to prevent invalid CSS properties
  Object.keys(style).forEach(
    (key) => style[key] === undefined && delete style[key]
  );

  // Render the Positioned component with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{child}</div>;
};

// Prop types for the Positioned component
Positioned.propTypes = {
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  child: PropTypes.node.isRequired,
};

export default Positioned;
