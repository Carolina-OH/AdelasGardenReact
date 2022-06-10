import React from 'react'
import { useState, useEffect } from "react";
import productos from "../ItemJs/ItemjsObjeto";
import ItemList from '../ItemList/ItemList';

const ItemDetail= (props)=> {

    const [itemsDet, setItemsDet] = useState([]);
    const [idItem, setIdItem] = useState(props.id)
  
    const pedirDatosDet = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });
    };
  
    useEffect(() => {
      pedirDatosDet()
        .then((resp) => {
          setItemsDet(resp);
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }, []);
  
    pedirDatosDet()
    .then((resp) => {
      console.log(resp[idItem].nombre);
    })
    .catch((error) => {
      console.log("error:", error);
    });
  return (
    <div>
        <button>Ver detalle {props.id}</button>

    </div>
  )
}

export default ItemDetail