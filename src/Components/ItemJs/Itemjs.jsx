import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import { Counter } from "../Counter/ItemCount";


const CardItem = (props) => {
  
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
          </ListGroup>
            <Counter stock={props.stock}/>

        </Card>
      }
    </div>
  );
};

export default CardItem