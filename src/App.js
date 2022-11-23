import "./App.scss";
import React from "react";
import Home from "./Paginas/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Componentes/Login/Login"
import Register from "./Componentes/Register/Register"
import CarritoCompras from "./Paginas/CarritoCompras/CarritoCompras"





function App() {

  return (
    <Router>
      <Switch>
        <Route path="/Login" exact render={props =>(<Login {...props }/>)}></Route>
        <Route path="/home" exact render={props =>(<Home {...props }/>)}></Route>
        <Route path="/register" exact render={props =>(<Register {...props }/>)}></Route>
        <Route path="/carrito" exact render={props =>(<CarritoCompras {...props }/>)}></Route>
        {/* <Route path="/producto" exact render={props =>(<Products {...props }/>)}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
