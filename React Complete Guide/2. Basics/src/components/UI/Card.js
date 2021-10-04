import "./Card.css";
// construyendo un componente contenedor
// utilizando el children

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
