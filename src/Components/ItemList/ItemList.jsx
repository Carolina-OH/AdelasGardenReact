import { useState, useEffect } from "react";
import productos from "../ItemJs/ItemjsObjeto";
import CardItem from "../ItemJs/ItemJs";
import { useParams } from "react-router-dom";
import React from 'react';
import {collection, getDocs, where, query} from 'firebase/firestore';
import { db } from "../../index"



const ItemList = () => {
  const [items, setItems] = useState([]);


  useEffect(()=>{

    const productosCollection = collection(db, 'productos');
    const q = categoriaId ? query(productosCollection, where("categoria", "==",categoriaId)): productosCollection
    
    getDocs(q)
      .then((resp)=>{
        const newItems = resp.docs.map((doc)=>{
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        console.log(newItems)
        setItems(newItems)
      })

    }, [categoriaId])


  const pedirDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  };

  const params = useParams();
  useEffect(()=>{
 //   console.log('received by categoria:', params)
    return()=>{
 //     console.log('will change by categoria:', params)
    }
  }, [params]) 
  const {categoriaId} = useParams()
 // console.log(params)

/*   useEffect(() => {
    pedirDatos()
      .then((resp) => {
        if (!categoriaId){
          setItems(resp);
        }
        else{
          setItems(resp.filter((item)=> item.categoria===categoriaId))
        }
       
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []); */

 
 

  return (
    <section className="Contenedor card-group g-4 m-4 justify-content-center">
      {items.map((item) => 
        <div key={item.id}>

          <CardItem stock={item.stock} inicial="1" nombre={item.nombre} des={item.des} img={item.imagen} precio={item.precio} id={item.id} categoria={item.categoria}/>

        </div>
      )}
    </section>
  );
};

export default ItemList;
