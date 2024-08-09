import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Align component mimicking Flutter's Align widget using flexbox CSS.
 * The Align component positions its child within itself according to the given alignment.
 *
 * @param {object} props - The properties object.
 * @param {string} [props.alignment='center'] - The alignment of the child within the container. Options: 'topLeft', 'topCenter', 'topRight', 'centerLeft', 'center', 'centerRight', 'bottomLeft', 'bottomCenter', 'bottomRight'.
 * @param {React.ReactNode} props.child - The content to be aligned.
 *
 * @returns {JSX.Element} The rendered Align component.
 */
const Align = ({ alignment = "center", child }) => {
  // Determine the CSS for alignment
  let justifyContent;
  let alignItems;
  switch (alignment) {
    case "topLeft":
      justifyContent = "flex-start";
      alignItems = "flex-start";
      break;
    case "topCenter":
      justifyContent = "center";
      alignItems = "flex-start";
      break;
    case "topRight":
      justifyContent = "flex-end";
      alignItems = "flex-start";
      break;
    case "centerLeft":
      justifyContent = "flex-start";
      alignItems = "center";
      break;
    case "center":
      justifyContent = "center";
      alignItems = "center";
      break;
    case "centerRight":
      justifyContent = "flex-end";
      alignItems = "center";
      break;
    case "bottomLeft":
      justifyContent = "flex-start";
      alignItems = "flex-end";
      break;
    case "bottomCenter":
      justifyContent = "center";
      alignItems = "flex-end";
      break;
    case "bottomRight":
      justifyContent = "flex-end";
      alignItems = "flex-end";
      break;
    default:
      justifyContent = "center";
      alignItems = "center";
  }

  // Generate the style object based on alignment
  const style = {
    display: "flex",
    justifyContent,
    alignItems,
    width: "100%",
    height: "100%",
  };

  // Render the Align component with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{child}</div>;
};

// Prop types for the Align component
Align.propTypes = {
  alignment: PropTypes.oneOf([
    "topLeft",
    "topCenter",
    "topRight",
    "centerLeft",
    "center",
    "centerRight",
    "bottomLeft",
    "bottomCenter",
    "bottomRight",
  ]),
  child: PropTypes.node.isRequired,
};

export default Align;
