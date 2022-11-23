import Carousel from 'react-bootstrap/Carousel';
import imagen from "../../assets/SVG/example.png"

function UncontrolledExample() {
  return (
    <div className='carrusel'>
    <Carousel style={{opacity: "90%"}}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={imagen}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;