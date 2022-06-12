import React from 'react'
import Card from 'react-bootstrap/Card'
import { Counter } from '../Counter/ItemCount'
const ItemDetail = (props) => {
  return (
    
    <div class="container m-5" style={{border:'1px solid black'}}>
    <p>Nombre:{props.nombre}</p>
    <img class="productoimg" src={props.imagen} alt="ficcus" style={{width:"18rem"}}/>
    <p>Descripción: {props.des}</p>
    <p>Precio: {props.precio}</p>
    </div>
  )
}

export default ItemDetail