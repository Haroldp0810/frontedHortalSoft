import "./CarritoCompras.scss";
import React from "react";
import Navbar from "../../Componentes/Navbar/Navbar";
import UncontrolledExample from "../../Componentes/Carrusel/Carrusel";

import Cards from "../../Componentes/Cards/Cards";
import { Apiurl } from "../../Services/routes";
import axios from "axios";

class carrio extends React.Component {

  manejador = () => {
    let url = Apiurl + "/inventory/products";
    axios.get(url)
    .then((response) => {
      if(response){
        localStorage.setItem("token", response.data.token);
        // const {history} =this.props
        // history.push("/carrito")
        
      }else{
        this.setState({
          error:true,
          errorMsg: "mrd"
        })
      }
        console.log(response)
    });
    console.log("estoy aqui", url);
  };

  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="secciones">
          <Cards></Cards>
        </div>
      </div>
    );
  }
}
export default carrio;
