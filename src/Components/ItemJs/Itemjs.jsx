import { Card } from "react-bootstrap";
import { Counter } from "../Counter/ItemCount";
import { Link } from 'react-router-dom'


const CardItem = (props) => {

  
  return (
    <div className="m-3">
      {
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.img} style={{height:"18rem"}}/>
          <Card.Body>
            <Card.Title>{props.nombre},   <span>Precio:{props.precio}</span></Card.Title>
          </Card.Body>
            <Link to={`/producto/${props.id}`}>
            <button className='btn btn-primary' >Ver más</button>
            </Link>
        </Card>
        
      }
    </div>
  );
};

export default CardItem