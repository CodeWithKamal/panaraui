// AnimatedContainer.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StyleUtils from "../utils/StyleUtils";

/**
 * AnimatedContainer component mimicking Flutter's AnimatedContainer widget using CSS and React.
 * The AnimatedContainer component transitions between different styles over a specified duration.
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
 * @param {number} [props.duration=300] - The duration of the animation in milliseconds.
 * @param {string} [props.easing='ease'] - The CSS easing function for the animation.
 * @param {React.ReactNode} [props.child=null] - The content to be rendered inside the container.
 *
 * @returns {JSX.Element} The rendered AnimatedContainer component.
 */
const AnimatedContainer = ({
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
  duration = 300,
  easing = "ease",
  child = null,
}) => {
  const { backgroundColor, border, borderRadius, boxShadow, gradient } =
    decoration;

  const [style, setStyle] = useState(
    StyleUtils.removeUndefinedStyles({
      width: StyleUtils.handleSize(width),
      height: StyleUtils.handleSize(height),
      ...StyleUtils.handleSpacing("margin", margin),
      ...StyleUtils.handleSpacing("padding", padding),
      display: "flex",
      justifyContent: alignment.includes("center")
        ? "center"
        : alignment.includes("top")
        ? "flex-start"
        : "flex-end",
      alignItems: alignment.includes("center")
        ? "center"
        : alignment.includes("start")
        ? "flex-start"
        : "flex-end",
      backgroundColor: gradient ? undefined : backgroundColor,
      background: gradient
        ? `linear-gradient(${gradient.direction}, ${gradient.colors.join(
            ", "
          )})`
        : undefined,
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
      transition: `all ${duration}ms ${easing}`,
      overflow: "hidden",
    })
  );

  useEffect(() => {
    setStyle(
      StyleUtils.removeUndefinedStyles({
        width: StyleUtils.handleSize(width),
        height: StyleUtils.handleSize(height),
        ...StyleUtils.handleSpacing("margin", margin),
        ...StyleUtils.handleSpacing("padding", padding),
        justifyContent: alignment.includes("center")
          ? "center"
          : alignment.includes("top")
          ? "flex-start"
          : "flex-end",
        alignItems: alignment.includes("center")
          ? "center"
          : alignment.includes("start")
          ? "flex-start"
          : "flex-end",
        backgroundColor: gradient ? undefined : backgroundColor,
        background: gradient
          ? `linear-gradient(${gradient.direction}, ${gradient.colors.join(
              ", "
            )})`
          : undefined,
        border:
          border &&
          `${border.width}${
            typeof border.width === "number" ? "px" : ""
          } solid ${border.color}`,
        borderRadius:
          borderRadius &&
          `${
            typeof borderRadius === "number"
              ? `${borderRadius}px`
              : borderRadius
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
        transition: `all ${duration}ms ${easing}`,
      })
    );
  }, [
    width,
    height,
    padding,
    margin,
    alignment,
    backgroundColor,
    border,
    borderRadius,
    boxShadow,
    gradient,
    duration,
    easing,
  ]);

  // Render the container with the generated style
  return <div style={style}>{child}</div>;
};

// Prop types for the AnimatedContainer component
AnimatedContainer.propTypes = {
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
  duration: PropTypes.number,
  easing: PropTypes.string,
  child: PropTypes.node,
};

export default AnimatedContainer;
