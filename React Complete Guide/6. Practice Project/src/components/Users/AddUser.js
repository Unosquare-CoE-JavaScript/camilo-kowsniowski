import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// importamos el componente Wrapper
import Wrapper from "../Helpers/Wrapper";

// para crear el formunariopo  creamos una const
// que maneje el evento de agregar usuario.
const AddUser = (props) => {
  // usando refs que se conectaran a los input
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // manejo del estado modal error
  const [error, setError] = useState("");
  // validacion
  const AddUserHandler = (event) => {
    event.preventDefault(); //previene la recarga de paginas
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    // consdicion si los campos estan vacios

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    // condicion si la edad esta vacia teniewndo encuenta de convertirla a numero
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid Age (non-empty values).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    // manupilamos el Dom para reset usuarios
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // cfuncion para resetear el estado de error

  const errorHandler = (event) => {
    setError(null);
  };

  return (
    <Wrapper>
      {/* renderizamos el modal de error dinamicamente */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="numbers" ref={ageInputRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
