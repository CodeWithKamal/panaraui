import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Row component mimicking Flutter's Row widget using flexbox CSS.
 * The Row component arranges its children horizontally.
 *
 * @param {object} props - The properties object.
 * @param {string | number | object} [props.padding] - The padding applied to the Row.
 * @param {string | number | object} [props.margin] - The margin applied to the Row.
 * @param {string} [props.mainAxisAlignment='start'] - The alignment of children along the main axis (horizontal). Options: 'start', 'center', 'end', 'spaceBetween', 'spaceAround', 'spaceEvenly'.
 * @param {string} [props.crossAxisAlignment='stretch'] - The alignment of children along the cross axis (vertical). Options: 'start', 'center', 'end', 'stretch', 'baseline'.
 * @param {string} [props.mainAxisSize='max'] - The size of the Row along the main axis (horizontal). Options: 'max', 'min'.
 * @param {React.ReactNode[]} props.children - The content to be arranged inside the Row.
 *
 * @returns {JSX.Element} The rendered Row component.
 */
const Row = ({
  padding = 0,
  margin = 0,
  mainAxisAlignment = "start",
  crossAxisAlignment = "stretch",
  mainAxisSize = "max",
  children,
}) => {
  // Determine the CSS for main axis alignment
  let justifyContent;
  switch (mainAxisAlignment) {
    case "start":
      justifyContent = "flex-start";
      break;
    case "center":
      justifyContent = "center";
      break;
    case "end":
      justifyContent = "flex-end";
      break;
    case "spaceBetween":
      justifyContent = "space-between";
      break;
    case "spaceAround":
      justifyContent = "space-around";
      break;
    case "spaceEvenly":
      justifyContent = "space-evenly";
      break;
    default:
      justifyContent = "flex-start";
  }

  // Determine the CSS for cross axis alignment
  let alignItems;
  switch (crossAxisAlignment) {
    case "start":
      alignItems = "flex-start";
      break;
    case "center":
      alignItems = "center";
      break;
    case "end":
      alignItems = "flex-end";
      break;
    case "stretch":
      alignItems = "stretch";
      break;
    case "baseline":
      alignItems = "baseline";
      break;
    default:
      alignItems = "stretch";
  }

  // Generate the style object based on props
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent,
    alignItems,
    ...StyleUtils.handleSpacing("padding", padding),
    ...StyleUtils.handleSpacing("margin", margin),
    width: mainAxisSize === "max" ? "100%" : "auto",
  };

  // Render the Row with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{children}</div>;
};

// Prop types for the Row component
Row.propTypes = {
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      t: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Top
      b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Bottom
      l: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Left
      r: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Right
    }),
    PropTypes.shape({
      x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Horizontal
      y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Vertical
    }),
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      t: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Top
      b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Bottom
      l: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Left
      r: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Right
    }),
    PropTypes.shape({
      x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Horizontal
      y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Vertical
    }),
  ]),
  mainAxisAlignment: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "spaceBetween",
    "spaceAround",
    "spaceEvenly",
  ]),
  crossAxisAlignment: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "stretch",
    "baseline",
  ]),
  mainAxisSize: PropTypes.oneOf(["max", "min"]),
  children: PropTypes.node.isRequired,
};

export default Row;
