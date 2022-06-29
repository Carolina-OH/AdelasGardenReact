import {collection,doc, getDocs, getFirestore} from 'firebase/firestore';
import React, { useEffect } from 'react'

export default function consultafirebase() {

 useEffect(()=>{
    const db = getFirestore();
    const itemsCollection = collection(db, 'productos');
    getDocs(itemsCollection).then((snapshot)=>{
        setProducts(snapshot.docs.map((doc)=>({
            id: doc.id, ...doc.data()})))
    });
    console.log(setProducts)
    }, [])
  return (
    <div>consultafirebase</div>
  )
}
