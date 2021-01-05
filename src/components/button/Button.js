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

import "./button.scss";

const Button = ({
  variant = "",
  disableShadow = "",
  size = "",
  color = "",
  disabled,
  startIcon,
  endIcon,
  children,
  onClick,
}) => {
  console.log(disableShadow);
  return (
    <button
      className={`btn ${variant} ${disableShadow} ${size} ${color} `}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="startIcon">{startIcon && startIcon}</div>
      {children}
      <div className="endIcon">{endIcon && endIcon}</div>
    </button>
  );
};

export default Button;
