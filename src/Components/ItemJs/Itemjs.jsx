import { Card } from "react-bootstrap";
import { Counter } from "../Counter/ItemCount";
import { Link } from 'react-router-dom'
import React from 'react';


const CardItem = (props) => {

  
  return (
    <div className="m-3">
      {
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.img} style={{height:"18rem"}}/>
          <Card.Body className="text-center">
            <Card.Title>{props.nombre}<hr></hr>   
            <span>Precio:{props.precio}</span>
            </Card.Title>
          </Card.Body>
            <Link className="text-center mb-3"to={`/producto/${props.id}`}>
            <button className='btn btn-primary' >Ver más</button>
            </Link>
        </Card>
        
      }
    </div>
  );
};

export default CardItem