import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({
  buttonText,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {buttonText}
  </button>
);

export default CustomButton;
