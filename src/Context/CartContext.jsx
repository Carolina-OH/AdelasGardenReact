import { createContext } from "react";
import { useState, useContext} from "react";
import React from 'react';


export const CartContext = createContext()

export const useCartContext =()=>{
    return useContext(CartContext)
}

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);
    console.log(cart);
  
    const addItem = (item) => {
      setCart([...cart, item]);
      alert(`añadiste ${item.cantidad} a tu carrito`)
    };
  
    const isInCart = (id)=>{
      return cart.some((prod)=>prod.id===id)
    }
  
    const calcularTotal =() =>{
      return cart.reduce((acc,prod)=>acc +=(prod.total),0)
    }
  
    const totalQuantity = ()=>{
      return cart.reduce((acc,prod)=>acc +=(prod.cantidad),0)
    }
  
    const emptyCart = ()=>{
      setCart([])
    }

    const removeItem =(id)=>{
        setCart(cart.filter((prod)=>prod.id!==id))
    }    
    return(
        <CartContext.Provider  value={
        {
            cart,
            addItem, 
            isInCart,
            calcularTotal,
            totalQuantity,
            emptyCart,
            removeItem

        }
        }>
            {children}
        </CartContext.Provider>
    )
}