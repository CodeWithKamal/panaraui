import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Image component mimicking Flutter's Image widget using CSS.
 * The Image component renders an image with specified properties.
 *
 * @param {object} props - The properties object.
 * @param {string} props.src - The source URL of the image.
 * @param {string} [props.alt=''] - The alt text for the image.
 * @param {string | number} [props.width='auto'] - The width of the image.
 * @param {string | number} [props.height='auto'] - The height of the image.
 * @param {string} [props.fit='fill'] - The object-fit value for the image. Options: 'fill', 'contain', 'cover', 'none', 'scale-down'.
 * @param {string} [props.alignment='center'] - The object-position value for the image.
 *
 * @returns {JSX.Element} The rendered Image component.
 */
const Image = ({
  src,
  alt = "",
  width = "auto",
  height = "auto",
  fit = "fill",
  alignment = "center",
}) => {
  // Generate the style object based on props
  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    objectFit: fit,
    objectPosition: alignment,
    backgroundRepeat: "no-repeat",
  };

  // Render the Image component with the generated style
  return (
    <img src={src} alt={alt} style={StyleUtils.removeUndefinedStyles(style)} />
  );
};

// Prop types for the Image component
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fit: PropTypes.oneOf(["fill", "contain", "cover", "none", "scale-down"]),
  alignment: PropTypes.string,
};

export default Image;
