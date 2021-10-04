import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <h1 className="titles">Users List</h1>
      <AddUser onAddUser={addUserHandler} />
      {/* debemos agregarle las props para que reciba los datos */}
      <h2 className="titles">Users</h2>
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
