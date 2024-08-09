import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Expanded component mimicking Flutter's Expanded widget using flexbox CSS.
 * The Expanded component makes its child expand to fill the available space within a parent flex container.
 *
 * @param {object} props - The properties object.
 * @param {number} [props.flex=1] - The flex grow value. Default is 1.
 * @param {React.ReactNode} props.child - The content to be expanded.
 *
 * @returns {JSX.Element} The rendered Expanded component.
 */
const Expanded = ({ flex = 1, child }) => {
  // Generate the style object based on props
  const style = {
    flex: flex,
    flexShrink: 0, // Ensures that Expanded items do not shrink
    flexBasis: "0%", // Ensures items will grow according to flex-grow
  };

  // Render the Expanded component with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{child}</div>;
};

// Prop types for the Expanded component
Expanded.propTypes = {
  flex: PropTypes.number,
  child: PropTypes.node.isRequired,
};

export default Expanded;
