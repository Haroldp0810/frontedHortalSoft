import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.scss";
import imagen from "../../assets/SVG/sesion-fotografica-otono-parque-mujer-feliz_197589-3827.png";
import invierno from "../../assets/SVG/hermosa-modelo-mujer-joven-estilo-ropa-abrigo-invierno-sombrero-punto-moda-chaqueta-beige-bufanda-ca.png";
import primavera from "../../assets/SVG/15689751507185_640x0.jpg";
import verano from "../../assets/SVG/coleccio-n-h-m-vestido-mujer-1525775040.jpg";

function BasicExample() {
  return (
    <div className="fondo">
      <div className="invierno">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={invierno} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={invierno}  />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="primavera">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={primavera} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={primavera}  />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="verano">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={verano}  />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={verano}  />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="otono">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imagen}  />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imagen}  />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;
