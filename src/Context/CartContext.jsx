import { createContext } from "react";
import { useState, useContext} from "react";
import React from 'react';
import {auth} from '../index'
import { provider } from '../index';
import {signInWithPopup} from "firebase/auth";
import Authenticator from "../Components/Authenticator/Authenticator";
import { BrowserRouter, Routes, Router, Link } from "react-router-dom";

export const CartContext = createContext()

export const useCartContext =()=>{
    return useContext(CartContext)
}

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);
    const [email, setEmail] = useState()
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

    const login = ()=>{
      signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re)
      const resp = re.user.email
      setEmail(resp)
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
            email


        }
        }>
            {children}
        </CartContext.Provider>
    )
}