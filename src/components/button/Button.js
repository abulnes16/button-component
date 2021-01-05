/* Button custom component
  A custom button with default styles 
  props: 
    - color: Indicates the color of the button, this styles are: 
      [primary, secondary, default, danger]
    - size: Indicates the size of the button
    - variant: Apply styles to the button this styles are: 
      -"text": Render a button with text
      -"outline": Render a button with border and no background
    - disabled: Apply disabled styles to the button and disable it
    - disableShadow: Disable the box shadow of the button 
    - startIcon: Put an icon at the start of the button text
    - endIcon: Put an icon at the end of the button text

*/

// React
import React from "react";

import "./button.scss";

const Button = (props) => {
  const {
    variant = "",
    disableShadow = "",
    size = "",
    color = "",
    disabled,
    startIcon,
    endIcon,
    children,
  } = props;
  return (
    <button
      className={`btn ${variant} ${disableShadow} ${size} ${color} `}
      disabled={disabled}
      {...props}
    >
      <div className="startIcon">{startIcon && startIcon}</div>
      {children}
      <div className="endIcon">{endIcon && endIcon}</div>
    </button>
  );
};

export default Button;
