// importamos el css a este archivo
// para utilizar componentes reutilizables podemos utilizar props
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      {/* esta componete necesita las props */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
  // para usar el componente debemos exportarlo
};
export default ExpenseItem;
