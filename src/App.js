import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/layout";
import Profile from "./components/layout/Profile";
import Dashboard from "./components/layout/Dashboard";
import LoginPage from "./components/Login";

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {/* ruta login */}
          <Route exact path="/" name="Login" render={() => <LoginPage />} />
          {/* ruta home */}
          <Route
            exact
            path="/home"
            name="Layout"
            render={() => <Layout />}
          ></Route>
          <Route
            exact
            path="/Dashboard"
            name="Layout"
            render={() => <Dashboard />}
          />
          <Route
            exact
            path="/Profile"
            name="Layout"
            render={() => <Profile />}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
