import { useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export const Counter = ({max,setContador,contador, agregarAlCarro}) => {
  let [stock, setStock] = useState(max);


  const incrementar = () => {
    if (stock>0 && contador<(max)) {
      setContador(contador + 1);
   //   setStock(stock - 1);
    } else {
      console.log("no hay más stock");
    }
  };

  const decrementar = () => {
    if (contador >= 1 && stock >= 0) {
      setContador(contador - 1);
   //   setStock(stock + 1);
    } else setContador(0);
  };


  return (
    <div>
      {
        <div>
            <ListGroup>
            <ListGroupItem>
              <p>Tienes {contador} en tu carrito</p>
            </ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Card.Link>
              <button className="quitar btn btn-primary" onClick={decrementar}>
                -
              </button>
            </Card.Link>
            <Card.Link>
              <button className="agregar  btn btn-primary" onClick={incrementar}>
                +
              </button>
              <hr></hr>
              <button className="btn btn-primary center" onClick={agregarAlCarro}> Agregar al carrito</button>
              </Card.Link>
              </Card.Body>
          </div>

      }
    </div>
  );
};
