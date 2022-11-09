import "./App.scss";
import { useState } from "react";
import React from "react";
import Home from "./Paginas/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Componentes/Login/Informacion";



function App() {
  const [menuAbierto, setMenuAbierto] = useState(true);

  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
