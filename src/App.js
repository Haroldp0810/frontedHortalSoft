import "./App.scss";
import React from "react";
import Home from "./Paginas/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Componentes/Login/Login"





function App() {

  return (
    <Router>
      <Switch>
        <Route path="/Login" exact render={props =>(<Login {...props }/>)}></Route>
        <Route path="/home" exact render={props =>(<Home {...props }/>)}></Route>
      </Switch>
    </Router>
  );
}

export default App;
