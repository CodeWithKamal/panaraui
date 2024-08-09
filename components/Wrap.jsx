import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Wrap component mimicking Flutter's Wrap widget using CSS flexbox with wrapping.
 * The Wrap component arranges its children in multiple horizontal or vertical runs.
 *
 * @param {object} props - The properties object.
 * @param {string | number | object} [props.padding=0] - The padding applied to the Wrap.
 * @param {string | number | object} [props.margin=0] - The margin applied to the Wrap.
 * @param {string} [props.direction='horizontal'] - The direction in which to arrange the children. Options: 'horizontal', 'vertical'.
 * @param {string} [props.alignment='start'] - How the children within a run should be placed in the main axis. Options: 'start', 'center', 'end', 'spaceBetween', 'spaceAround', 'spaceEvenly'.
 * @param {string} [props.crossAxisAlignment='start'] - How the children within a run should be aligned relative to each other in the cross axis. Options: 'start', 'center', 'end', 'stretch', 'baseline'.
 * @param {string} [props.runAlignment='start'] - How the runs themselves should be placed in the cross axis. Options: 'start', 'center', 'end', 'spaceBetween', 'spaceAround', 'spaceEvenly'.
 * @param {number | string} [props.spacing=0] - The gap between adjacent children.
 * @param {number | string} [props.runSpacing=0] - The gap between lines.
 * @param {React.ReactNode[]} props.children - The content to be arranged inside the Wrap.
 *
 * @returns {JSX.Element} The rendered Wrap component.
 */
const Wrap = ({
  padding = 0,
  margin = 0,
  direction = "horizontal",
  alignment = "start",
  crossAxisAlignment = "start",
  runAlignment = "start",
  spacing = 0,
  runSpacing = 0,
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
      alignItems = "flex-start";
  }

  // Determine the CSS for run alignment
  let alignContent;
  switch (runAlignment) {
    case "start":
      alignContent = "flex-start";
      break;
    case "center":
      alignContent = "center";
      break;
    case "end":
      alignContent = "flex-end";
      break;
    case "spaceBetween":
      alignContent = "space-between";
      break;
    case "spaceAround":
      alignContent = "space-around";
      break;
    case "spaceEvenly":
      alignContent = "space-evenly";
      break;
    default:
      alignContent = "flex-start";
  }

  // Determine the flex direction
  const flexDirection = direction === "horizontal" ? "row" : "column";

  // Generate the style object based on props
  const style = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignContent: alignContent,
    gap: typeof spacing === "number" ? `${spacing}px` : spacing,
    rowGap: typeof runSpacing === "number" ? `${runSpacing}px` : runSpacing,
    ...StyleUtils.handleSpacing("padding", padding),
    ...StyleUtils.handleSpacing("margin", margin),
  };

  // Render the Wrap with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{children}</div>;
};

// Prop types for the Wrap component
Wrap.propTypes = {
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
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
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
  runAlignment: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "spaceBetween",
    "spaceAround",
    "spaceEvenly",
  ]),
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  runSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
};

export default Wrap;
