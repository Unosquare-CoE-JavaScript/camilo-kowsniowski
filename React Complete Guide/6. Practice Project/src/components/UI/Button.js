import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      //   agremamos las props de el boton
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {/* el texto dentro del boton lo obiene de la props. children
          que esta en Add user */}
      {props.children}
    </button>
  );
};

export default Button;
