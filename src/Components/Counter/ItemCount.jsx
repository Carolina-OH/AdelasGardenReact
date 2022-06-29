import { useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import React from 'react';


export const Counter = ({ max, setContador, contador, agregarAlCarro, volver }) => {
  let [stock, setStock] = useState(max - 1);


  const incrementar = () => {
    if (stock > 0 && contador < (max)) {
      setContador(contador + 1);
      setStock(stock - 1);
    } else {
      console.log("no hay más stock");
    }
  };

  const decrementar = () => {
    if (contador >= 1 && stock >= 0) {
      setContador(contador - 1);
      setStock(stock + 1);
    } else setContador(0);
  };

  return (
    <div>
      {
        <div>
          <div>
            <div className="Counterbtn">

              <button className="quitar btn btn-primary" onClick={decrementar}> - </button>


              <span className="m-2">{contador}</span>

              <button className="agregar  btn btn-primary" onClick={incrementar}>
                +
              </button>
            </div>
            <hr></hr>
            {contador === 0 ? 
              (<button className="btn btn-primary center m-2" onClick={agregarAlCarro} disabled> Agregar al carro</button>)
              : 
              (<button className="btn btn-primary center m-2" onClick={agregarAlCarro}> Agregar al carro</button>)
            }

            <button className="btn btn-primary center m-2" onClick={volver}>Volver</button>

          </div>
        </div>

      }
    </div>
  );
};
