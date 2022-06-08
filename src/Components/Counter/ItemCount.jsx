import { useState } from "react";
import { Card, ListGroupItem, ListGroup, Row, Col } from "react-bootstrap";

export const Counter = (props) => {
  let [stock, setStock] = useState(10);
  let [contador1, setContador1] = useState(1);

  const incrementar = () => {
    if (contador1 <= 10 && stock < 13 && stock > 0) {
      setContador1(contador1 + 1);
      setStock(stock - 1);
      console.log(stock);
    } else {
      console.log("no hay más stock");
    }
  };

  const decrementar = () => {
    if (contador1 >= 1 && stock >= 0) {
      setContador1(contador1 - 1);
      console.log(stock);
      setStock(stock + 1);
    } else setContador1(0);
  };

  return (
    <div className="m-3">
      {
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.nombre}</Card.Title>
            <Card.Text>{props.des}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <p>Precio:{props.precio}</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>Quedan {stock} unidades</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>{contador1}</p>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link>
              <button className="quitar" onClick={decrementar}>
                quitar
              </button>
            </Card.Link>
            <Card.Link>
              <button className="agregar" onClick={incrementar}>
                agregar
              </button>
            </Card.Link>
          </Card.Body>
        </Card>
      }
    </div>
  );
};
