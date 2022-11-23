import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/SVG/LogoCompleto.png";
import imagen from "../../assets/SVG/LogoSimplificado.png";
import login from "../../assets/SVG/icons8-entrar-50.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from "../Login/Login"
import Button from "react-bootstrap/Button";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const history = useHistory();

  const botonlogin = () => {
    history.push("/login")
}

  return (
    <header>
      <h3 className="img">
        <img src={imagen} width="90px" />
      </h3>
      <div className="center">
        <nav ref={navRef}>
          <a href="/#">Inicio</a>
          <a href="/#">Trabajo</a>
          <a href="/#">Servicios</a>
          <a href="/#">Contacto</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="login">
          
		  <Button class="style" onClick={botonlogin}>
			<img src={login} width="30px" ></img>
      
		</Button>
        </div>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
