//  ejemplo de scope avanzado

const myalert = () => {
  const x = "help i think i found a clue";
  const alerter = () => {
    alert(x);
  };
  alerter();
};

alert();

//  now the same aler whit a time

const myalert = () => {
  const x = "help i think i found a clue";
  const alerter = () => {
    alert(x);
  };

  setTimeout(alerter, 1000),
    console.log("que pasa primero este log o la alerta");
};

myalert();
