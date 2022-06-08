import { Counter } from "../Counter/ItemCount";
import { useState, useEffect } from "react";
import productos from "../ItemJs/Itemjs";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  console.log(
    items.map((item) => <h2>{items.nombre}</h2>)
  );

  const pedirDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  useEffect(() => {
    pedirDatos()
      .then((resp) => {
        setItems(resp);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  return (
    <section className="Contenedor card-group g-4 m-4 justify-content-center">
      {items.map((item) => 
        <div key={item.id}>

          <Counter stock="10" inicial="1" nombre={item.nombre} des={item.des} img={item.imagen} precio={item.precio}/>

        </div>
      )}
    </section>
  );
};

export default ItemListContainer;
