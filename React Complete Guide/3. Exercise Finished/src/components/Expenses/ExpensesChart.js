import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  // le pasamos los datos mediante el array .map que se creo en el otro componente
  const chartDatapoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  //  creamos un loop para todos los expenseses
  // este llop debe ser of porque se esta manejando un objeto
  for (const expense of props.expenses) {
    const expensesMonth = expense.date.getMonth(); // enero inicia en 0
    chartDatapoints[expensesMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDatapoints}></Chart>;
};

export default ExpensesChart;
