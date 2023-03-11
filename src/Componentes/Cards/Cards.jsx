import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.scss";
import imagen1 from "../../assets/SVG/zanahorias.webp"
import imagen2 from "../../assets/SVG/papa.webp"
import imagen3 from "../../assets/SVG/Frijol.jpg"
import imagen4 from "../../assets/SVG/Repollo.jpg"
import imagen5 from "../../assets/SVG/Tomate.jpg"
import imagen6 from "../../assets/SVG/Pimenton.webp"

function BasicExample() {
  return (
    <div className="fondo">
      <div className="Columna1">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={imagen1} />
          <Card.Body>
            <Card.Title>Zanahorias</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={imagen2}  />
          <Card.Body>
            <Card.Title>Papas</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="Columna2">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={imagen3} />
          <Card.Body>
            <Card.Title>Frijol</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={imagen4}  />
          <Card.Body>
            <Card.Title>Repollo</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="Columna3">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={imagen5}  />
          <Card.Body>
            <Card.Title>Tomate</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={imagen6}  />
          <Card.Body>
            <Card.Title>Pimentón</Card.Title>
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
