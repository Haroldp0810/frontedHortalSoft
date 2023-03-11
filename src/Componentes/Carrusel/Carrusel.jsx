import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import imagen1 from "../../assets/SVG/zanahorias.webp"
import imagen2 from "../../assets/SVG/papa.webp"
import imagen3 from "../../assets/SVG/Frijol.jpg"
import imagen4 from "../../assets/SVG/Repollo.jpg"
import imagen5 from "../../assets/SVG/Tomate.jpg"
import imagen6 from "../../assets/SVG/Pimenton.webp"

function UncontrolledExample() {
  return (
    <div className='carrusel'>
    <Carousel style={{opacity: "90%"}}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={imagen1}
          alt="First slide"/>
        <Carousel.Caption>
          <h3>Zanahorias</h3>
          <Button>Comprar</Button>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item >
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"/>
        <Carousel.Caption>
          <h3>Papas</h3>
          <Button>Comprar</Button>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item >
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"/>
        <Carousel.Caption>
          <h3>Frijol</h3>
          <Button>Comprar</Button>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item >
        <img
          className="d-block w-100"
          src={imagen4}
          alt="Fourth slide"/>
        <Carousel.Caption>
          <h3>Repollo</h3>
          <Button>Comprar</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block w-100"
          src={imagen5}
          alt="Fifth slide"/>
        <Carousel.Caption>
          <h3>Tomate</h3>
          <Button>Comprar</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block w-100"
          src={imagen6}
          alt="Sixth slide"/>
        <Carousel.Caption>
          <h3>Pimentón</h3>
          <Button>Comprar</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;