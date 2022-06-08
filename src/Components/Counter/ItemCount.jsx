import { useState } from 'react'
import { Card, ListGroupItem, ListGroup} from 'react-bootstrap';


export const Counter = () => {
let [stock,setStock]=useState(10)
let [contador1, setContador1] = useState(1)


const incrementar = () => {
  if (contador1<=10 && stock<13 && stock>0){
setContador1(contador1+1)
setStock(stock-1)
 console.log(stock)
}
else{
console.log("no hay más stock")

}
}

const decrementar =()=>{
    if(contador1>=1 && stock>=0){
setContador1(contador1-1)
console.log(stock)
setStock(stock+1)
}
else
setContador1(0)
}


  return (
      <div>

    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/571/082/non_2x/cute-cactus-plant-in-pot-kawaii-character-icon-free-vector.jpg" />
  <Card.Body>
    <Card.Title>Plantita kawai</Card.Title>
    <Card.Text>
    Acá tenemos una exclusiva plantita kawai
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><p>Quedan {stock} unidades</p></ListGroupItem>
    <ListGroupItem><p>{contador1}</p></ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#"><button className='quitar' onClick={decrementar}>quitar</button></Card.Link>
    <Card.Link href="#"><button className='agregar' onClick={incrementar}>agregar</button></Card.Link>
  </Card.Body>
</Card>
    </div>
  )
}

