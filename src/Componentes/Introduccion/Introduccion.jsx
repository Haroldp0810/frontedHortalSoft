import "./Introduccion.scss";
import React, { Component } from "react";
import axios from "axios";
import { Apiurl } from "../../Services/routes";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import imagen from "../../assets/SVG/sesion-fotografica-otono-parque-mujer-feliz_197589-3827.png";
import Carousel from "react-bootstrap/Carousel";
import invierno from "../../assets/SVG/hermosa-modelo-mujer-joven-estilo-ropa-abrigo-invierno-sombrero-punto-moda-chaqueta-beige-bufanda-ca.png";
import primavera from "../../assets/SVG/15689751507185_640x0.jpg";
import verano from "../../assets/SVG/coleccio-n-h-m-vestido-mujer-1525775040.jpg";
import { useHistory } from "react-router-dom";



class Introduccion extends Component {
  token() {
    let token = localStorage.getItem("token");
    console.log("Este es el token  :  " + token);
  }

  getInfo() {
    let url = Apiurl + "/inventory/products";
    axios
      .get(url)
      .then((result) => {
        localStorage.getItem("token", result.data.token);
      })
      .catch(console.log);
    console.log(url);
  }
  

  login = () => {
    const {history} =this.props
        history.push("/login")
}

  render() {
    return (
      <div className="fondo">
        <div className="introduccion" id="introduccion">
          <div className="invierno">
            <Carousel>
              <Carousel.Item z-index="0">
                <img
                  className="d-block w-100"
                  src={invierno}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p>Coleccion de Invierno</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={invierno}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <p>Coleccion de Invierno</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={invierno}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <p>Coleccion de Invierno</p>
                  <Button onClick={this.login}>Comprar
                  
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <div src="" alt=""></div>
          </div>
          <div className="primavera">
            {/* <h1 className="h1">Holi</h1> */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={primavera}
                  alt="First slide"
                />
                <Carousel.Caption>
                <p>Coleccion de primavera</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={primavera}
                  alt="Second slide"
                />

                <Carousel.Caption>
                <p>Coleccion de primavera</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={primavera}
                  alt="Third slide"
                />

                <Carousel.Caption>
                <p>Coleccion de primavera</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="verano">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={verano} alt="First slide" />
                <Carousel.Caption>
                <p>Coleccion verano</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={verano}
                  alt="Second slide"
                />

                <Carousel.Caption>
                <p>Coleccion verano</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={verano} alt="Third slide" />

                <Carousel.Caption>
                <p>Coleccion verano</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="otono">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={imagen} alt="First slide" />
                <Carousel.Caption>
                <p>Coleccion Otoño</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imagen}
                  alt="Second slide"
                />

                <Carousel.Caption>
                <p>Coleccion Otoño</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={imagen} alt="Third slide" />

                <Carousel.Caption>
                <p>Coleccion Otoño</p>
                  <Button>Comprar</Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div src="" alt=""></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Introduccion;

/*export default function Introduccion() {
  return (
    <div className="introduccion" id="introduccion">
      <div className="derecha">
        <div src="" alt=""></div>
      </div>
      <div className="izquierda"></div>
    </div>
  )
}*/
