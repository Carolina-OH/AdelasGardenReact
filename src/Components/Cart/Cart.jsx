import { Link } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";


const Carttotal = () => {

  const { cart } = useContext(CartContext);
  return (
    <div className="m-3">
      {
        <div className="div">
          {cart.map((item) => 
        <div key={item.id}>
          nombre: {item.nombre}
        </div>
        )}
          
        </div>
      }
    </div>
  );
};

export default Carttotal