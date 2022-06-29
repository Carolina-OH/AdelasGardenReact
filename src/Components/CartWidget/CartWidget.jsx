import {useCartContext } from '../../Context/CartContext'
import React from 'react';
const CartWidget = () => {

   // const {cart, totalQuantity} = useContext(CartContext)
    const {totalQuantity} = useCartContext()
    return (
        <div>
            <section>

                <img className="ml-auto"src="../Carrito.svg" width="20%" alt="Carrito de compras" />
                <span>{totalQuantity()}</span>

            </section>
        </div>
    )
}

export default CartWidget 
