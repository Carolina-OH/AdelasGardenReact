import React from "react";
import { useState, useEffect } from "react";
import productos from "../ItemJs/ItemjsObjeto";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true)


  const pedirDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
    },2000);
    });
  };

  const {itemId} = useParams()
  console.log(itemId)
  console.log(item)

  useEffect(() => {
    setLoading(true)

    pedirDatos()
      .then((resp) => {       
      setItem(resp.find((item)=> item.id=== Number(itemId)))
      })
      .catch((error) => {
        console.log("error:", error);
      })
      .finally(()=>{
        setLoading(false)
      })
  }, []);



  return (
    <section>
      {
      loading
      ? <Spinner animation="border" role="status">
        <span>Loading...</span>
      </Spinner>
      :<ItemDetail nombre={item.nombre} imagen={item.imagen} des={item.des} precio={item.precio} stock={item.stock}/>
      }
    </section>
  );
};

export default ItemDetailContainer;
