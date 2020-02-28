import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Jokes from "./components/Jokes";

import { PrivateRoute } from "./utils/PrivateComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />

      <Route path="/register" component={Register} />

      <PrivateRoute path="/jokes" component={Jokes} />
    </div>
  );
}

export default App;
