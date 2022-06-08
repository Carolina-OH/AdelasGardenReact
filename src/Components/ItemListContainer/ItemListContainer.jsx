import { Counter } from "../Counter/ItemCount";
import { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap";

const productos = [
  {
    id: 0,
    nombre: "margarita",
    des: "Maravillosa flor amarilla",
    imagen:
      "https://t1.uc.ltmcdn.com/es/posts/2/4/1/que_significan_las_margaritas_26142_orig.jpg",
    precio: "2500",
  },
  {
    id: 1,
    nombre: "ficcus",
    des: "Ficcus de 30 cms de alto",
    imagen:
      "https://www.elmueble.com/medio/2021/12/14/ficus-istvan-hernek-btk9dbst1sa-unsplash_a3ca9cd7_674x1006.jpg",
    precio: "6500",
  },
  {
    id: 2,
    nombre: "Ruda",
    des: "Planta terapeutica y aleja malas vibras",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmmHUjIyfnunfK0EzyZwGc9VULM2EKCHMow&usqp=CAU",
    precio: "4000",
  },
  {
    id: 3,
    nombre: "Maceta",
    des: "Macetero de plástico 20 cm diámetro",
    imagen:
      "https://viverosnicolas.cl/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-13-at-16.21.04-2.jpeg",
    precio: "1500",
  },
  {
    id: 4,
    nombre: "Tierra de hojas",
    des: "Saco de 5kg de tierra de hojas",
    imagen:
      "https://sodimac.scene7.com/is/image/SodimacCL/3160254?fmt=jpg&fit=fit,1&wid=420&hei=420",
    precio: "8000",
  },
  {
    id: 5,
    nombre: "Girasol",
    des: "Maravilloso girasol en etapa adulta, 15cm alto",
    imagen: "https://m.media-amazon.com/images/I/7147u3sNH9L._AC_SX466_.jpg",
    precio: "7000",
  },
  {
    id: 6,
    nombre: "Naranjo",
    des: "Naranjo con fruta, 50cm de alto",
    imagen:
      "https://www.flordeplanta.com.ar/wp-content/uploads/2016/11/naranjo-dulce-maceta.jpg",
    precio: "20000",
  },
];

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
        <div>

          <Counter stock="10" inicial="1" nombre={item.nombre} des={item.des} img={item.imagen} precio={item.precio}/>

        </div>
      )}
    </section>
  );
};

export default ItemListContainer;
