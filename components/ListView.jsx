import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * ListView component mimicking Flutter's ListView widget using CSS overflow for scrollability.
 * The ListView component arranges its children in a scrollable list.
 *
 * @param {object} props - The properties object.
 * @param {string | number | object} [props.padding=0] - The padding applied to the ListView.
 * @param {string | number | object} [props.margin=0] - The margin applied to the ListView.
 * @param {string} [props.direction='vertical'] - The direction in which to arrange the children. Options: 'vertical', 'horizontal'.
 * @param {string} [props.alignment='start'] - The alignment of children. Options: 'start', 'center', 'end', 'spaceBetween', 'spaceAround', 'spaceEvenly'.
 * @param {string} [props.crossAxisAlignment='stretch'] - The alignment of children on the cross axis. Options: 'start', 'center', 'end', 'stretch', 'baseline'.
 * @param {number | string} [props.spacing=0] - The gap between adjacent children.
 * @param {React.ReactNode[]} props.children - The content to be arranged inside the ListView.
 *
 * @returns {JSX.Element} The rendered ListView component.
 */
const ListView = ({
  padding = 0,
  margin = 0,
  direction = "vertical",
  alignment = "start",
  crossAxisAlignment = "stretch",
  spacing = 0,
  children,
}) => {
  // Determine the CSS for main axis alignment
  let justifyContent;
  switch (alignment) {
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

  // Determine the flex direction
  const flexDirection = direction === "vertical" ? "column" : "row";

  // Determine the overflow direction
  const overflowDirection =
    direction === "vertical" ? "auto hidden" : "hidden auto";

  // Generate the style object based on props
  const style = {
    display: "flex",
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    gap: typeof spacing === "number" ? `${spacing}px` : spacing,
    overflow: overflowDirection,
    ...StyleUtils.handleSpacing("padding", padding),
    ...StyleUtils.handleSpacing("margin", margin),
  };

  // Render the ListView with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{children}</div>;
};

// Prop types for the ListView component
ListView.propTypes = {
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
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  alignment: PropTypes.oneOf([
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
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
};

export default ListView;
