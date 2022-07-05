import React from 'react'
import {auth} from '../../index';
import { provider } from '../../index';
import {signInWithPopup} from "firebase/auth";
import Carttotal from '../Cart/Cart';
import { useState } from 'react';
import { CartContext, useCartContext } from "../../Context/CartContext";
import { useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";




export default function Authenticator() {
  const [loading, setLoading] = useState(true)
  const {  email } = useCartContext();

console.log(email)
useEffect(()=>{
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000);
  }, [])

  return (
    <div>
      <h1>Datos de usuario</h1>
      email: {
      loading
      ? <Spinner animation="border" role="status">
        <span>Loading...</span>
      </Spinner>
      :email
      }
      

    </div>
  )
};
