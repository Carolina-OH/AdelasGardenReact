import React from "react";
import { Counter } from "../Counter/ItemCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ item }) => {
  let [cantidad, setCantidad] = useState(1);
  let [show, setShow] = useState(true);

  const { addItem } = useContext(CartContext);
  const { isInCart } = useContext(CartContext);

  const handleAgregar = () => {
    const total = cantidad * item.precio;
    const itemToCart = {
      ...item,
      cantidad: cantidad,
      total: total,
    };

     isInCart(item.id)===false?
     addItem(itemToCart)
    
    :
    alert('ya compraste esto intenta comprando algo más')
    setShow(false)
    
  };

  const navigate = useNavigate();
  const handleVolver = () => {
    navigate(-1);
  };

  const handleState = () => {
    setShow(true);
  };

  return (
    <div
      className="container mt-5"
      style={{ border: "1px solid black", width: "50rem", display: "flex" }}
    >
      <img
        className="productoimg"
        src={item.imagen}
        alt={item.nombre}
        style={{ width: "18rem" }}
      />
      <div className="m-2 text-center" style={{ width: "50rem" }}>
        <p>Nombre:{item.nombre}</p>
        <p>Descripción: {item.des}</p>
        <p>Precio: {item.precio}</p>
        {show === true ? (
          <Counter
            max={item.stock}
            contador={cantidad}
            setContador={setCantidad}
            agregarAlCarro={handleAgregar}
            volver={handleVolver}
          />
        ) : (
          <div>
            <Link className="text-center mb-3" to={`/cart`}>
              <button className=" btn btn-primary m-2">Ir al carro</button>
            </Link>
            <button className=" btn btn-primary m-2" onClick={handleState}>
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
