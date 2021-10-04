import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //validamos mediante esta funcion el estado de login
  //  utilizamos el use effect para validar DESPUES (after) si esta login
  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem("isLoggedIn");
    // agregamos la condicion que usa la constante de login
    if (storedUserLoggedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  // de esta manera almacenamos la info en el local storage
  const loginHandler = (email, password) => {
    //  le damos un identificador al login
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  // variable del boton logout le agregamos el remove item

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
