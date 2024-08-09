import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * GridView component mimicking Flutter's GridView widget using CSS grid layout.
 * The GridView component arranges its children in a grid.
 *
 * @param {object} props - The properties object.
 * @param {string | number | object} [props.padding=0] - The padding applied to the GridView.
 * @param {string | number | object} [props.margin=0] - The margin applied to the GridView.
 * @param {number} [props.columns=2] - The number of columns in the grid.
 * @param {string | number} [props.columnGap=0] - The gap between columns.
 * @param {string | number} [props.rowGap=0] - The gap between rows.
 * @param {string} [props.alignment='start'] - The alignment of children. Options: 'start', 'center', 'end', 'stretch'.
 * @param {string} [props.justifyItems='stretch'] - The alignment of children on the horizontal axis. Options: 'start', 'center', 'end', 'stretch'.
 * @param {React.ReactNode[]} props.children - The content to be arranged inside the GridView.
 *
 * @returns {JSX.Element} The rendered GridView component.
 */
const GridView = ({
  padding = 0,
  margin = 0,
  columns = 2,
  columnGap = 0,
  rowGap = 0,
  alignment = "start",
  justifyItems = "stretch",
  children,
}) => {
  // Generate the style object based on props
  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    columnGap: typeof columnGap === "number" ? `${columnGap}px` : columnGap,
    rowGap: typeof rowGap === "number" ? `${rowGap}px` : rowGap,
    alignItems: alignment,
    justifyItems: justifyItems,
    ...StyleUtils.handleSpacing("padding", padding),
    ...StyleUtils.handleSpacing("margin", margin),
  };

  // Render the GridView with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{children}</div>;
};

// Prop types for the GridView component
GridView.propTypes = {
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
  columns: PropTypes.number,
  columnGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignment: PropTypes.oneOf(["start", "center", "end", "stretch"]),
  justifyItems: PropTypes.oneOf(["start", "center", "end", "stretch"]),
  children: PropTypes.node.isRequired,
};

export default GridView;
