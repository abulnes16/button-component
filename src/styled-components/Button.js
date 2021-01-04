/* Button custom component
  A custom button with default styles 
  props: 
    - color: Indicates the text color of the button
    - bgColor: Indicates the background color of the button
    - size: Indicates the size of the button
    - text: Apply text styles to the button
    - outline: Apply outline styles to the button
    - disabled: Apply disabled styles to the button and disable it
    - disableShadow: Disable the box shadow of the button 
    - type: Indicates the style types of the button, current are: 
            [primary, secondary, default, danger]
    - startIcon: Put an icon at the start of the button text
    - endIcon: Put an icon at the end of the button text

*/

// React
import React from "react";
// Styled
import styled, { css } from "styled-components";

// Button types styles

const outlineStyles = css`
  border: 1px solid #3d5afe;
  color: #3d5afe;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: rgba(41, 98, 255, 0.1);
  }
`;

const textStyles = css`
  background-color: transparent;
  color: #3d5afe;
  box-shadow: none;

  &:hover,
  &:focus {
    background-color: rgba(41, 98, 255, 0.1);
  }
`;

const disableStyles = css`
  color: #9e9e9e;
`;

// Button colors styles
const primaryStyles = css`
  background: #2962ff;
  color: white;
  &:hover,
  &:focus {
    background: #0039cb;
  }
`;

const secondaryStyles = css`
  background: #455a64;
  color: white;
  &:hover,
  &:focus {
    background: #1c313a;
  }
`;

const dangerStyles = css`
  background: #d32f2f;
  color: white;
  &:hover,
  &:focus {
    background: #9a0007;
  }
`;

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border: none;
  outline: none;
  padding: ${(props) => {
    switch (props.size) {
      case "sm":
        return "0.6em 0.8em";
      case "lg":
        return "1em 1.4em";
      default:
        return "0.8em 1.2em";
    }
  }};
  background-color: ${(props) => props.bgColor || "#e0e0e0"};
  color: ${(props) => props.color || "#333"};
  border-radius: 6px;
  box-shadow: ${(props) =>
    props.disableShadow || "0px 2px 3px rgba(51, 51, 51, 0.2);"};

  &:hover,
  &:focus {
    background-color: ${(props) => props.hoverColor || "#aeaeae"};
  }

  ${(props) => (props.outline ? outlineStyles : "")}
  ${(props) => (props.text ? textStyles : "")}

  ${(props) => (props.disabled ? disableStyles : "")}

  ${(props) => {
    switch (props.type) {
      case "primary":
        return primaryStyles;
      case "secondary":
        return secondaryStyles;
      case "danger":
        return dangerStyles;
      default:
        return "";
    }
  }}

  .startIcon {
    margin-right: 5px;
  }

  .endIcon {
    margin-left: 5px;
  }
`;

const Button = (props) => {
  return (
    <ButtonContainer {...props}>
      <div className="startIcon">{props.startIcon && props.startIcon}</div>
      {props.children}
      <div className="endIcon">{props.endIcon && props.endIcon}</div>
    </ButtonContainer>
  );
};

export default Button;
