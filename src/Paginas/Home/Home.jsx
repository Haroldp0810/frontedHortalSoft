import BarraSuperior from "../../Componentes/BarraSuperior/BarraSuperior";
import Contacto from "../../Componentes/Contacto/Contacto";

import Introduccion from "../../Componentes/Introduccion/Introduccion";
import "./Home.scss";
import { useState } from "react";
import React from "react";
import Carrusel from "../../Componentes/Carrusel/Carrusel";
import Informacion from "../../Componentes/Informacion/Informacion";


export default function Home() {

  //const [menuAbierto, setMenuAbierto] = useState(true)

  return (
    <div className="app">
      <BarraSuperior/>
      <Carrusel></Carrusel>
      <div className="secciones">
        <Introduccion>
        </Introduccion>
        <Informacion/>
        <Contacto/>
      </div>
    </div>
  );
}