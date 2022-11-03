import BarraSuperior from "../../Componentes/BarraSuperior/BarraSuperior";
import Contacto from "../../Componentes/Contacto/Contacto";
import Informacion from "../../Componentes/Informacion/Informacion";
import Introduccion from "../../Componentes/Introduccion/Introduccion";
import "./Home.scss";
import { useState } from "react";
import React from "react";


export default function Home() {

  //const [menuAbierto, setMenuAbierto] = useState(true)

  return (
    <div className="app">
      <BarraSuperior/>
      <div className="secciones">
        <Introduccion/>
        <Informacion/>
        <Contacto/>
      </div>
    </div>
  );
}