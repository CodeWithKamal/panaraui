/**
 * Utility class for handling CSS-related functions.
 * Provides methods to generate CSS styles for spacing and size.
 */
class StyleUtils {
  /**
   * Handles CSS generation for width and height.
   *
   * @param {string | number} value - The value of width or height.
   * @returns {string} - The CSS value for width or height.
   */
  static handleSize(value) {
    if (typeof value === "number") {
      return `${value}px`;
    }
    return value;
  }

  /**
   * Handles CSS generation for paddings and margins.
   *
   * @param {string} prefix - The prefix for the CSS property (e.g., "margin" or "padding").
   * @param {string | number | object} spacing - The spacing value or object specifying individual sides.
   * @returns {object} - An object containing CSS styles for the given spacing.
   */
  static handleSpacing(prefix, spacing) {
    if (typeof spacing === "number" || typeof spacing === "string") {
      return {
        [prefix]: typeof spacing === "string" ? spacing : `${spacing}px`,
      };
    }
    if (typeof spacing === "object") {
      return {
        [`${prefix}Top`]: spacing.t
          ? typeof spacing.t === "string"
            ? spacing.t
            : `${spacing.t}px`
          : undefined,
        [`${prefix}Bottom`]: spacing.b
          ? typeof spacing.b === "string"
            ? spacing.b
            : `${spacing.b}px`
          : undefined,
        [`${prefix}Left`]: spacing.l
          ? typeof spacing.l === "string"
            ? spacing.l
            : `${spacing.l}px`
          : undefined,
        [`${prefix}Right`]: spacing.r
          ? typeof spacing.r === "string"
            ? spacing.r
            : `${spacing.r}px`
          : undefined,
        [`${prefix}Inline`]: spacing.x
          ? typeof spacing.x === "string"
            ? spacing.x
            : `${spacing.x}px`
          : undefined,
        [`${prefix}Block`]: spacing.y
          ? typeof spacing.y === "string"
            ? spacing.y
            : `${spacing.y}px`
          : undefined,
      };
    }
    return {};
  }
  /**
   * Utility function to remove undefined values from an object.
   *
   * @param {object} obj - The object to clean.
   * @returns {object} - The cleaned object.
   */
  static removeUndefinedStyles = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v !== undefined)
    );
  };
}

export default StyleUtils;
