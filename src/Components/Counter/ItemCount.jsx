import { useState } from "react";
import { Card, ListGroup, ListGroupItem} from "react-bootstrap";
import { Link } from 'react-router-dom'

export const Counter = ({max,setContador,contador, agregarAlCarro}) => {
  let [stock, setStock] = useState(max-1);


  const incrementar = () => {
    if (stock>0 && contador<(max)) {
      setContador(contador + 1);
      setStock(stock - 1);
    } else {
      console.log("no hay más stock");
    }
  };

  const decrementar = () => {
    if (contador >= 1 && stock >= 0) {
      setContador(contador - 1);
      setStock(stock + 1);
    } else setContador(0);
  };


  return (
    <div>
      {
        <div>
            <ListGroup>
            <ListGroupItem>
              <p>Tienes {contador} en tu carrito ({stock} disponible)</p>
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
              <Link className="text-center mb-3"to={`/cart`}>
              <button className="btn btn-primary center" onClick={agregarAlCarro}> Comprar</button>
              </Link>
              </Card.Link>
              </Card.Body>
          </div>

      }
    </div>
  );
};
