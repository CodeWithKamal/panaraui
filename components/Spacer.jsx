import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Spacer component mimicking Flutter's Spacer widget using flexbox CSS.
 * The Spacer component takes up space within a parent flex container, pushing other children apart.
 *
 * @param {object} props - The properties object.
 * @param {number} [props.flex=1] - The flex grow value. Default is 1.
 *
 * @returns {JSX.Element} The rendered Spacer component.
 */
const Spacer = ({ flex = 1 }) => {
  // Generate the style object for Spacer
  const style = {
    flexGrow: flex,
  };

  // Render the Spacer component with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)} />;
};

// Prop types for the Spacer component
Spacer.propTypes = {
  flex: PropTypes.number,
};

export default Spacer;
