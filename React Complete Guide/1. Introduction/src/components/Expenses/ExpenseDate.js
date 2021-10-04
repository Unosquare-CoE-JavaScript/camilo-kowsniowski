import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // oganizamos los datos del calendario en
  const month = props.date.toLocaleString("en", { month: "long" });
  const year = props.date.toLocaleString("en", { day: "2-digit" });
  const day = props.date.getFullYear();

  return (
    <div className="expense-date">
      {/* formatos de la fecha pasados como props */}
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
