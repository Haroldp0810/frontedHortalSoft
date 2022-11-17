import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/SVG/LogoCompleto.png"
import imagen from "../../assets/SVG/LogoSimplificado.png"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>
                <img src={imagen} width="60px"/>
            </h3>
			<div className="center">
			<nav ref={navRef}>
				<a href="/#">Inicio</a>
				<a href="/#">Trabajo</a>
				<a href="/#">Servicios</a>
				<a href="/#">Contacto</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			</div>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
