import React from 'react'
import Card from 'react-bootstrap/Card'
import { Counter } from '../Counter/ItemCount'
import { useState } from "react";
const ItemDetail = ({item}) => {
  let [cantidad, setCantidad] = useState(1);
  const handleAgregar = ()=>{
    const total=cantidad*(item.precio)
    const itemToCard= {
      ...item, 
      cantidad: cantidad,
      total: total
    }


     console.log(itemToCard)
     alert('el total es de $' + total + ' pesos')
  }


  return (
    
    <div className="container mt-5" style={{border:'1px solid black', width: '50rem', display:'flex' }}>
      <img className="productoimg" src={item.imagen} alt="" style={{width:"18rem"}}/>
      <div className="m-2 text-center" style={{width: '50rem',}}>
        <p>Nombre:{item.nombre}</p>
        <p>Descripción: {item.des}</p>
        <p>Precio: {item.precio}</p>
        <Counter max={item.stock} contador={cantidad} setContador={setCantidad} agregarAlCarro={handleAgregar}/>
     </div>
    </div>
  )
}

export default ItemDetail