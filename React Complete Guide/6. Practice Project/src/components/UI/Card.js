import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    ///pasarem,os el formulario en forma de props.children
    <div className={`${classes.card} ${props.className} ${classes.button}`}>
      {props.children}
    </div>
  );
};

export default Card;
