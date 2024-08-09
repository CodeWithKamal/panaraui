import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Icon component mimicking Flutter's Icon widget using CSS and React.
 * The Icon component displays an icon using a specified icon library or custom SVG.
 *
 * @param {object} props - The properties object.
 * @param {string} [props.iconLibrary='font'] - The library of the icon (e.g., 'font', 'material', 'svg').
 * @param {string} props.iconData - The name or data of the icon.
 * @param {string | number} [props.size=24] - The size of the icon.
 * @param {string} [props.color='#000'] - The color of the icon.
 * @param {object} [props.style] - Additional styles to apply to the icon.
 *
 * @returns {JSX.Element} The rendered Icon component.
 */
const Icon = ({
  iconLibrary = "font",
  iconData,
  size = 24,
  color = "#000",
  style,
}) => {
  const iconStyle = {
    fontSize: typeof size === "number" ? `${size}px` : size,
    color,
    ...style,
  };

  // Determine the icon content based on the iconLibrary prop
  let iconContent;
  if (iconLibrary === "font") {
    iconContent = (
      <i
        className={iconData}
        style={StyleUtils.removeUndefinedStyles(iconStyle)}
      ></i>
    );
  } else if (iconLibrary === "material") {
    iconContent = (
      <i
        className="material-icons"
        style={StyleUtils.removeUndefinedStyles(iconStyle)}
      >
        {iconData}
      </i>
    );
  } else if (iconLibrary === "svg") {
    iconContent = (
      <svg
        style={{ ...iconStyle, fill: color }}
        width={iconStyle.fontSize}
        height={iconStyle.fontSize}
        viewBox="0 0 24 24"
        dangerouslySetInnerHTML={{ __html: iconData }}
      ></svg>
    );
  }

  return iconContent;
};

// Prop types for the Icon component
Icon.propTypes = {
  iconLibrary: PropTypes.oneOf(["font", "material", "svg"]),
  iconData: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
