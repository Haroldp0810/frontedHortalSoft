
import "./BarraSuperior.scss"
import {Person, Mail} from "@mui/icons-material/"

export default function BarraSuperior({menuAbierto, setMenuAbierto}) {
  return (
    <div className={"barraSuperior '"} >
      <div className="cubierta">
        <div className="izquierda">
          <a href="#introduccion" className="logo"> Four Seasons </a>
          <div className="contenedorIconos">
            <Person className="icono"/>
            <span>+57 312-678-99-87</span>
          </div>
          <div className="contenedorIconos">
            <Mail className="icono"/>
            <span>Harold.p@gmail.com</span>
          </div>
        </div>
        <div className="derecha">
          <div className="desplegable" onClick={()=>setMenuAbierto(!menuAbierto)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
