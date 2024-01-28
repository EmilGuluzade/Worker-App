import React from "react";

const Button = (props) => {
  return (
    <button
    onClick={props.onClick}
    type={props.type||"button"}
      className={`p-2 text-lg bg-teal-700 text-white  ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
