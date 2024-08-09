import React from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * Container component mimicking Flutter's Container widget using pure CSS.
 *
 * @param {object} props - The properties object.
 * @param {string | number} [props.width='100%'] - The width of the container.
 * @param {string | number} [props.height='100%'] - The height of the container.
 * @param {string | number | object} [props.padding=0] - The padding applied to the container.
 * @param {string | number | object} [props.margin=0] - The margin applied to the container.
 * @param {string} [props.alignment='center'] - The alignment of children inside the container.
 * @param {object} [props.decoration={}] - The decoration properties for styling the container.
 * @param {string} [props.decoration.backgroundColor='transparent'] - The background color of the container.
 * @param {object} [props.decoration.border={}] - The border properties.
 * @param {string | number} [props.decoration.border.width=0] - The width of the border.
 * @param {string} [props.decoration.border.color='black'] - The color of the border.
 * @param {string | number} [props.decoration.borderRadius=0] - The border-radius of the container.
 * @param {object} [props.decoration.boxShadow={}] - The box-shadow properties.
 * @param {object} [props.decoration.boxShadow.offset={x: 0, y: 0}] - The x and y offset for the shadow.
 * @param {string | number} [props.decoration.boxShadow.blurRadius=0] - The blur radius of the shadow.
 * @param {string | number} [props.decoration.boxShadow.spreadRadius=0] - The spread radius of the shadow.
 * @param {string} [props.decoration.boxShadow.color='rgba(0, 0, 0, 0)'] - The color of the shadow.
 * @param {object} [props.decoration.gradient={}] - The gradient properties.
 * @param {string} [props.decoration.gradient.direction='to top'] - The direction of the gradient.
 * @param {array} [props.decoration.gradient.colors=['#f0f0f0', '#ffffff']] - The colors used in the gradient.
 * @param {React.ReactNode} [props.child=null] - The content to be rendered inside the container.
 *
 * @returns {JSX.Element} The rendered Container component.
 */
const Container = ({
  width = "auto",
  height = "auto",
  padding = 0,
  margin = 0,
  alignment = "topLeft",
  decoration = {
    backgroundColor: "transparent",
    border: { width: 0, color: "black" },
    borderRadius: 0,
    boxShadow: {
      offset: { x: 0, y: 0 },
      blurRadius: 0,
      spreadRadius: 0,
      color: "rgba(0, 0, 0, 0)",
    },
    gradient: { direction: "to top", colors: ["#f0f0f0", "#ffffff"] },
  },
  child = null,
}) => {
  const { backgroundColor, border, borderRadius, boxShadow, gradient } =
    decoration;

  // Determine the CSS for alignment
  let justifyContent;
  let alignItems;
  switch (alignment) {
    case "topLeft":
      justifyContent = "flex-start";
      alignItems = "flex-start";
      break;
    case "topCenter":
      justifyContent = "center";
      alignItems = "flex-start";
      break;
    case "topRight":
      justifyContent = "flex-end";
      alignItems = "flex-start";
      break;
    case "centerLeft":
      justifyContent = "flex-start";
      alignItems = "center";
      break;
    case "center":
      justifyContent = "center";
      alignItems = "center";
      break;
    case "centerRight":
      justifyContent = "flex-end";
      alignItems = "center";
      break;
    case "bottomLeft":
      justifyContent = "flex-start";
      alignItems = "flex-end";
      break;
    case "bottomCenter":
      justifyContent = "center";
      alignItems = "flex-end";
      break;
    case "bottomRight":
      justifyContent = "flex-end";
      alignItems = "flex-end";
      break;
    default:
      justifyContent = "center";
      alignItems = "center";
  }

  // Generate the style object based on props
  const style = {
    width: StyleUtils.handleSize(width),
    height: StyleUtils.handleSize(height),
    ...StyleUtils.handleSpacing("margin", margin),
    ...StyleUtils.handleSpacing("padding", padding),
    display: "flex",
    justifyContent,
    alignItems,
    backgroundColor,
    border:
      border &&
      `${border.width}${typeof border.width === "number" ? "px" : ""} solid ${
        border.color
      }`,
    borderRadius:
      borderRadius &&
      `${
        typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius
      }`,
    boxShadow:
      boxShadow &&
      `${
        typeof boxShadow.offset.x === "number"
          ? `${boxShadow.offset.x}px`
          : boxShadow.offset.x
      } ${
        typeof boxShadow.offset.y === "number"
          ? `${boxShadow.offset.y}px`
          : boxShadow.offset.y
      } ${
        typeof boxShadow.blurRadius === "number"
          ? `${boxShadow.blurRadius}px`
          : boxShadow.blurRadius
      } ${
        typeof boxShadow.spreadRadius === "number"
          ? `${boxShadow.spreadRadius}px`
          : boxShadow.spreadRadius
      } ${boxShadow.color}`,
    background: gradient
      ? `linear-gradient(${gradient.direction}, ${gradient.colors.join(", ")})`
      : undefined,
    overflow: "hidden",
  };

  // Render the container with the generated style
  return <div style={StyleUtils.removeUndefinedStyles(style)}>{child}</div>;
};

// Prop types for the Container component
Container.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  alignment: PropTypes.oneOf([
    "center",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "topCenter",
    "bottomCenter",
    "centerLeft",
    "centerRight",
  ]),
  decoration: PropTypes.shape({
    backgroundColor: PropTypes.string,
    border: PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      color: PropTypes.string,
    }),
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    boxShadow: PropTypes.shape({
      offset: PropTypes.shape({
        x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
      blurRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      spreadRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      color: PropTypes.string,
    }),
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
  }),
  child: PropTypes.node,
};

export default Container;
