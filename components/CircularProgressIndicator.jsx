import React, { useEffect } from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * CircularProgressIndicator component mimicking Flutter's CircularProgressIndicator widget using CSS.
 * The CircularProgressIndicator component displays a circular loading spinner.
 *
 * @param {object} props - The properties object.
 * @param {string | number} [props.size=40] - The size (width and height) of the circular indicator.
 * @param {string} [props.color='#000'] - The color of the circular indicator.
 * @param {number} [props.thickness=4] - The thickness of the circular indicator's stroke.
 * @param {boolean} [props.indeterminate=true] - Whether the indicator is indeterminate.
 *
 * @returns {JSX.Element} The rendered CircularProgressIndicator component.
 */
const CircularProgressIndicator = ({
  size = 40,
  color = "#000",
  thickness = 4,
  indeterminate = true,
}) => {
  const sizeStyle = typeof size === "number" ? `${size}px` : size;

  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";

    // Define the keyframes
    const keyframes = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;

    // Append the keyframes to the style element
    styleElement.appendChild(document.createTextNode(keyframes));

    // Append the style element to the document head
    document.head.appendChild(styleElement);

    // Cleanup function to remove the style element when the component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const style = {
    width: sizeStyle,
    height: sizeStyle,
    borderWidth: `${thickness}px`,
    borderStyle: "solid",
    borderColor: `${color} ${color} transparent`,
    borderRadius: "50%",
    animation: indeterminate ? "spin 1.2s linear infinite" : "none",
  };

  return <div style={StyleUtils.removeUndefinedStyles(style)}></div>;
};

// Prop types for the CircularProgressIndicator component
CircularProgressIndicator.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  thickness: PropTypes.number,
  indeterminate: PropTypes.bool,
};

export default CircularProgressIndicator;
