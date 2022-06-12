import { useState, useEffect } from "react";
import productos from "../ItemJs/ItemjsObjeto";
import CardItem from "../ItemJs/ItemJs";
import { useParams } from "react-router-dom";



const ItemList = () => {
  const [items, setItems] = useState([]);

  console.log(
    items.map((item) => <h2>{items.nombre}</h2>)
  );

  const pedirDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  };

  const params = useParams();
  useEffect(()=>{
    console.log('received by categoria:', params)
    return()=>{
      console.log('will change by categoria:', params)
    }
  }, [params]) 
  const {categoriaId} = useParams()
  console.log(params)

  useEffect(() => {
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
  }, []);

 
 

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
