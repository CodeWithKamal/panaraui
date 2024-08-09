import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Stack component mimicking Flutter's Stack widget using relative positioning CSS.
 * The Stack component allows children to be positioned on top of each other.
 *
 * @param {object} props - The properties object.
 * @param {React.ReactNode[]} props.children - The content to be stacked.
 *
 * @returns {JSX.Element} The rendered Stack component.
 */
const Stack = ({ children }) => {
  // Generate the style object for Stack
  const style = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  // Render the Stack component with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{children}</div>;
};

// Prop types for the Stack component
Stack.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Stack;
