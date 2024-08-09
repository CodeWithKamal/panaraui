import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * SizedBox component mimicking Flutter's SizedBox widget using pure CSS.
 * The SizedBox component is used to create a box with a fixed size in width, height, or both.
 *
 * @param {object} props - The properties object.
 * @param {string | number} [props.width='auto'] - The width of the SizedBox. Can be a string (e.g., "100%") or a number (e.g., 100 for 100px).
 * @param {string | number} [props.height='auto'] - The height of the SizedBox. Can be a string (e.g., "100%") or a number (e.g., 100 for 100px).
 * @param {React.ReactNode} [props.child=null] - The content to be rendered inside the SizedBox.
 *
 * @returns {JSX.Element} The rendered SizedBox component.
 */
const SizedBox = ({ width = "auto", height = "auto", child = null }) => {
  // Generate the style object based on props
  const style = {
    width: StyleUtils.handleSize(width),
    height: StyleUtils.handleSize(height),
  };

  // Render the SizedBox with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{child}</div>;
};

// Prop types for the SizedBox component
SizedBox.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  child: PropTypes.node,
};

export default SizedBox;
