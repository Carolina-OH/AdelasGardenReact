import React from 'react'
import Card from 'react-bootstrap/Card'
import { Counter } from '../Counter/ItemCount'
import { useState } from "react";
const ItemDetail = ({item}) => {
  let [cantidad, setCantidad] = useState(1);
  const handleAgregar = ()=>{
    const itemToCard= {
      ...item, 
      cantidad: cantidad
    }
     console.log(itemToCard)
  }

  return (
    
    <div className="container m-5" style={{border:'1px solid black'}}>
    <p>Nombre:{item.nombre}</p>
    <img className="productoimg" src={item.imagen} alt="" style={{width:"18rem"}}/>
    <p>Descripción: {item.des}</p>
    <p>Precio: {item.precio}</p>
    <Counter max={item.stock} contador={cantidad} setContador={setCantidad} agregarAlCarro={handleAgregar}/>
    </div>
  )
}

export default ItemDetail