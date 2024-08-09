import React, { useEffect } from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * LinearProgressIndicator component mimicking Flutter's LinearProgressIndicator widget using CSS.
 * The LinearProgressIndicator component displays a horizontal loading bar.
 *
 * @param {object} props - The properties object.
 * @param {string | number} [props.width='100%'] - The width of the linear indicator.
 * @param {string | number} [props.height=4] - The height of the linear indicator.
 * @param {string} [props.color='#000'] - The color of the linear indicator.
 * @param {string} [props.backgroundColor='#e0e0e0'] - The background color of the linear indicator.
 * @param {boolean} [props.indeterminate=true] - Whether the indicator is indeterminate.
 * @param {number} [props.value=0] - The value of the progress indicator, between 0 and 100.
 *
 * @returns {JSX.Element} The rendered LinearProgressIndicator component.
 */
const LinearProgressIndicator = ({
  width = "100%",
  height = 4,
  color = "#000",
  backgroundColor = "#e0e0e0",
  indeterminate = true,
  value = 0,
}) => {
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";

    // Define the keyframes for the indeterminate animation
    const keyframes = `
      @keyframes indeterminate {
        0% {
          left: -40%;
          right: 100%;
        }
        100% {
          left: 100%;
          right: -40%;
        }
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

  const containerStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    backgroundColor: backgroundColor,
    overflow: "hidden",
    position: "relative",
  };

  const progressStyle = {
    width: indeterminate ? "auto" : `${value}%`,
    height: "100%",
    backgroundColor: color,
    position: "absolute",
    animation: indeterminate ? "indeterminate 1.2s linear infinite" : "none",
    transition: "width 0.3s ease",
  };

  return (
    <div style={StyleUtils.removeUndefinedStyles(containerStyle)}>
      <div style={StyleUtils.removeUndefinedStyles(progressStyle)}></div>
    </div>
  );
};

// Prop types for the LinearProgressIndicator component
LinearProgressIndicator.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  indeterminate: PropTypes.bool,
  value: PropTypes.number,
};

export default LinearProgressIndicator;
