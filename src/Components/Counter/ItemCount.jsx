import { useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export const Counter = (props) => {
  let [stock, setStock] = useState(props.stock);
  let [contador1, setContador1] = useState(1);

  const incrementar = () => {
    if (stock>0 && contador1<(props.stock)) {
      console.log(contador1)
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
    <div>
      {
        <div>
            <ListGroup>
            <ListGroupItem>
              <p>Quedan {stock-1} unidades</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>Tienes {contador1} en tu carrito</p>
            </ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Card.Link>
              <button className="quitar btn-primary" onClick={decrementar}>
                quitar
              </button>
            </Card.Link>
            <Card.Link>
              <button className="agregar  btn-primary" onClick={incrementar}>
                agregar
              </button>
              </Card.Link>
              </Card.Body>
          </div>

      }
    </div>
  );
};
