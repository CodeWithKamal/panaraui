import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Text component mimicking Flutter's Text widget using CSS.
 * The Text component renders styled text, with support for gradient text color.
 *
 * @param {object} props - The properties object.
 * @param {string} props.data - The text content to be rendered.
 * @param {string} [props.textAlign='left'] - The alignment of the text. Options: 'left', 'right', 'center', 'justify'.
 * @param {object} [props.style={}] - The style properties for the text.
 * @param {string | number} [props.style.fontSize='16px'] - The font size of the text.
 * @param {string} [props.style.fontWeight='normal'] - The font weight of the text. Options: 'normal', 'bold', 'bolder', 'lighter', or numerical values (100, 200, etc.).
 * @param {string} [props.style.color='black'] - The color of the text.
 * @param {object} [props.style.gradient] - The gradient properties for the text color.
 * @param {string} [props.style.gradient.direction='to right'] - The direction of the gradient.
 * @param {array} [props.style.gradient.colors=['#000000', '#ffffff']] - The colors used in the gradient.
 * @param {string} [props.style.fontFamily='Arial, sans-serif'] - The font family of the text.
 * @param {string} [props.style.letterSpacing='normal'] - The letter spacing of the text.
 * @param {string} [props.style.lineHeight='normal'] - The line height of the text.
 *
 * @returns {JSX.Element} The rendered Text component.
 */
const Text = ({
  data,
  textAlign = "left",
  style: {
    fontSize = "16px",
    fontWeight = "normal",
    color = "black",
    gradient,
    fontFamily = "Arial, sans-serif",
    letterSpacing = "normal",
    lineHeight = "normal",
  } = {},
}) => {
  // Generate the style object based on props
  const style = {
    fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
    fontWeight: fontWeight,
    textAlign: textAlign,
    fontFamily: fontFamily,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight,
    background: gradient
      ? `linear-gradient(${gradient.direction}, ${gradient.colors.join(", ")})`
      : undefined,
    WebkitBackgroundClip: gradient ? "text" : undefined,
    WebkitTextFillColor: gradient ? "transparent" : color,
    color: gradient ? undefined : color,
  };

  // Render the Text component with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{data}</div>;
};

// Prop types for the Text component
Text.propTypes = {
  data: PropTypes.string.isRequired,
  textAlign: PropTypes.oneOf(["left", "right", "center", "justify"]),
  style: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([
        "normal",
        "bold",
        "bolder",
        "lighter",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ]),
    ]),
    color: PropTypes.string,
    gradient: PropTypes.shape({
      direction: PropTypes.oneOf([
        "to top",
        "to top right",
        "to top left",
        "to bottom",
        "to bottom right",
        "to bottom left",
        "to right",
        "to left",
      ]),
      colors: PropTypes.arrayOf(PropTypes.string),
    }),
    fontFamily: PropTypes.string,
    letterSpacing: PropTypes.string,
    lineHeight: PropTypes.string,
  }),
};

export default Text;
