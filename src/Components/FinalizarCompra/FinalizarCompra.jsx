import React from 'react'
import { useState } from 'react';
import { useCartContext } from "../../Context/CartContext";
import { useEffect} from 'react';
import { Spinner } from "react-bootstrap";
import Select from 'react-select'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {db} from '../../index'

export default function FinalizarCompra() {

  const { user,loginStatus, resumen } = useCartContext();
  const [loading, setLoading] = useState(true)
  const [focused, setFocused] = useState(false);
  const [direccion, setDireccion]=useState()
  const [comuna, setComuna]=useState()
  const [resumenFinal, setResumenFinal]=useState([])
  const [estado, setEstado]=useState(false)
  const onFocus = () => setFocused(true);
  console.log(user)
  console.log(resumen)
/*   let [{id,nombre, precio, imagen, cantidad, total, des, categoria}] = resumen;
  let [{email, NombreCliente}] = user
 */
  const logged =()=>{
    if(loginStatus===false){
      setLoading(false)
      console.log(loading)
    }else{
      setLoading(true)
    }
  }

  const getDireccion =(event)=>{
    console.log(event.target.value)
    setDireccion(event.target.value)
 
  }
  const getComuna =(event)=>{
    console.log(event.value)
    setComuna(event.value)
  }


 //console.log(id,nombre, imagen, cantidad, total,direccion, comuna)

    useEffect(()=>{
    logged()
    //onFocus()
   // getDireccion()
   // getComuna()
    /*   setTimeout(() => {
        setLoading(false)
      }, 2000); */
      }, [loginStatus])



  const comunas =[
    {value: 'Santiago', label:'Santiago'},
    {value:'Las Condes', label:'Las Condes'},
    {value:'La Florida', label:'La Florida'}
  ]

  const terminarCompra =()=>{
  let [{id,nombre, precio, imagen, cantidad, total, des, categoria}] = resumen;
  let [{email, NombreCliente}] = user
    const resumenFin = [{id, nombre, imagen, cantidad, precio, total,NombreCliente, email,direccion,comuna}]
    console.log(resumenFinal)
    setResumenFinal(resumenFin)
    setEstado(true)
  }

  useEffect(()=>{
    subirData()

       }, [estado])
     


  const subirData=async(e)=> {
    if (estado==true){
    try{
     await addDoc(collection(db, 'compras'),{
      ...resumenFinal
     })
    }catch(e){
      console.log(e)
    }
    }else{
      console.log(resumenFinal)
    }
  }


  return (
    <div>
      <h1 className='text-center mt-4'>Finalizar la compra</h1>
      {
      loading
      ? <Spinner animation="border" role="status">
        <span>Loading...</span>
      </Spinner>
      :
      <div className='d-flex justify-content-center m-5 vertical-align-middle'>
{/*       <h6>Email: </h6><input disabled type="text" defaultValue={user.email}></input>
      <h6>Nombre: </h6><input disabled type="text"  defaultValue={user.nombre} ></input>
      <h6>Dirección: </h6><input type="text"  className="address-user text-center" placeholder='Ingresa tu dirección'></input>
 */}
      <ul>
        <li className='m-2'style={{listStyle:"none"}}>Email: </li>
        <li className='m-2'style={{listStyle:"none"}}>Nombre: </li>
        <li className='m-2'style={{listStyle:"none"}}>Dirección: </li>
        <li className='m-2'style={{listStyle:"none"}}>Comuna: </li>
      </ul>
      <ul>
        <li style={{listStyle:"none"}}><input className="form-control" disabled type="text" defaultValue={user[0].email}></input></li>
        <li style={{listStyle:"none"}}><input className="form-control" disabled type="text"  defaultValue={user[0].NombreCliente} ></input></li>
        <li className='m-1' style={{listStyle:"none"}}><input type="text" onChange={getDireccion}  className="address-user text-center" placeholder='Ingresa tu dirección' onFocus={onFocus}></input></li>
        <li className='m-1' style={{listStyle:"none"}}><Select type="text" onChange={getComuna} options={comunas} className="address-user text-center" placeholder='Ingresa tu comuna'></Select></li>
      </ul>

      <button className='pagarbtn btn btn-primary' onClick={terminarCompra}>Pagar</button>
      </div>


      }


    </div>
  )
}
