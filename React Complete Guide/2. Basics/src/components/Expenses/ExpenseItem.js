// importamos el css a este archivo
// para utilizar componentes reutilizables podemos utilizar props
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("expense item evaluated by react");
  // agregamos la funcion que maneja el evento click
  // utilizamos useState con destructuuring

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* esta componete necesita las props */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* agregamos un boton para manejar los estados */}
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
  // para usar el componente debemos exportarlo
};
export default ExpenseItem;
