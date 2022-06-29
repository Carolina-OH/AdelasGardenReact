import React from "react";
import { useState, useEffect } from "react";
import productos from "../ItemJs/ItemjsObjeto";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import {collection, getDocs} from 'firebase/firestore';
import { db } from "../../index"


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    setLoading(true)

    const productosCollection = collection(db, 'productos');
    getDocs(productosCollection)
      .then((resp)=>{
        const newItems = resp.docs.map((doc)=>{
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setItem(newItems.find((item)=> item.id=== (itemId)))
        console.log(newItems)
      })
      .finally(()=>{
        setLoading(false)})

    }, [])



/*   const pedirDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
    },2000);
    });
  }; */
 

  

  
  const {itemId} = useParams()
  //console.log(itemId)
  //console.log(item)

/*   useEffect(() => {
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
  }, []); */



  return (
    <section>
      {
      loading
      ? <Spinner animation="border" role="status">
        <span>Loading...</span>
      </Spinner>
      :<ItemDetail item={item}/>
      }
    </section>
  );
};

export default ItemDetailContainer;
