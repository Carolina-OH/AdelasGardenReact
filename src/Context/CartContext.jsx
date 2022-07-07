import { createContext } from "react";
import { useState, useContext} from "react";
import React from 'react';
import {auth} from '../index'
import { provider } from '../index';
import {signInWithPopup} from "firebase/auth";
import FinalizarCompra from "../Components/FinalizarCompra/FinalizarCompra";
import { BrowserRouter, Routes, Router, Link } from "react-router-dom";

export const CartContext = createContext()

export const useCartContext =()=>{
    return useContext(CartContext)
}

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);
    const [resumen, setResumen] = useState([]);
    const [user, setUser] = useState([])
    const [loginStatus, setLoginStatus]=useState(true)
    console.log(cart);
  
    const addItem = (item) => {
      setCart([...cart, item]);
      setResumen([...cart, item]);
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

    const login = ()=>{
      signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re)
      const resp = {email:re.user.email, NombreCliente: re.user.displayName}
      setUser([resp])
      setLoginStatus(false)
      console.log(resp)
    })
    .catch((error)=>{
      console.log(error)
    }) 
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
            removeItem, 
            login,
            user,
            loginStatus,
            resumen,
            setResumen


        }
        }>
            {children}
        </CartContext.Provider>
    )
}