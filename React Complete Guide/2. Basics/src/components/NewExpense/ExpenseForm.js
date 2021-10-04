import React, { useState } from "react";

import "./ExpenseForm.css";

// para que se almacene la informacion de los input se agrega la
// funcion onchage
const ExpenseForm = (props) => {
  // utilizamos de nuevo useState para manejar los cambios
  //  podemos utilizar varioS useState para cada caso
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // o podemos usar una forma mas elegante
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // ********FUNCIONES QUE ALMACENAN DATOS**********//
  // funcion arrow que maneja los input titulo
  const titleChangeHandler = (event) => {
    // event.target.value almacena los datos del imput en un objeto
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // se debe usar el prev state para que la actualizacion de estados sea correcta
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  // funcion arrow para los input de amount

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  //funcion arrow para los input de date

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // funcion arrow para el submit

  const submiHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData();
    // para limpiar el formulariocuando ya es llenado
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submiHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* agregamos al input los estados y los valores ingresados */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
