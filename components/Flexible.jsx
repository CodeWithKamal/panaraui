import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Flexible component mimicking Flutter's Flexible widget using flexbox CSS.
 * The Flexible component allows a child to be flexible within a parent flex container.
 *
 * @param {object} props - The properties object.
 * @param {number} [props.flex=1] - The flex grow value. Default is 1.
 * @param {number} [props.shrink=1] - The flex shrink value. Default is 1.
 * @param {React.ReactNode} props.child - The content to be flexible.
 *
 * @returns {JSX.Element} The rendered Flexible component.
 */
const Flexible = ({ flex = 1, shrink = 1, child }) => {
  // Generate the style object based on props
  const style = {
    flexGrow: flex,
    flexShrink: shrink,
    flexBasis: "0%", // Ensures items will grow or shrink according to flex-grow and flex-shrink
  };

  // Render the Flexible component with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{child}</div>;
};

// Prop types for the Flexible component
Flexible.propTypes = {
  flex: PropTypes.number,
  shrink: PropTypes.number,
  child: PropTypes.node.isRequired,
};

export default Flexible;
