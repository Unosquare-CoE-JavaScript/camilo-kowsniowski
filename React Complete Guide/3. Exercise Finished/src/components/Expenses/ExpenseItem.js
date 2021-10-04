// importamos el css a este archivo
// para utilizar componentes reutilizables podemos utilizar props
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        {/* esta componete necesita las props */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* agregamos un boton para manejar los estados */}
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
  // para usar el componente debemos exportarlo
};
export default ExpenseItem;
