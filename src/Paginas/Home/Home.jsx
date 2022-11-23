
import "./Home.scss";

import Navbar from "../../Componentes/Navbar/Navbar";
import UncontrolledExample from "../../Componentes/Carrusel/Carrusel";
import Introduccion from "../../Componentes/Introduccion/Introduccion";


export default function Home() {

  //const [menuAbierto, setMenuAbierto] = useState(true)

  return (
    <div className="app">
      <Navbar/>
      <div className="secciones">
        <Introduccion></Introduccion>
        <UncontrolledExample/>
      </div>
    </div>
  );
}