import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";


const Carttotal = () => {

  const { cart, calcularTotal, emptyCart, removeItem, totalQuantity } = useCartContext();

  return (
    <div className="m-3">
      {totalQuantity()!==0 ? (
      <div>
        {
          <div className="div d-block">
            <h1 className='text-center m-5'>Su total a pagar es de: {calcularTotal()}</h1>
            <div className='d-flex'>
              {cart.map((item) =>
                <div key={item.id} className="m-3 text-center d-flex justify-content-center" style={{ width: "40rem", border: "solid 1px black" }}>
                  <img className="productoimg d-flex" src={item.imagen} alt="" style={{ width: "8rem" }} />
                  <div className='justify-content-center mt-2 text-center'>
                    <p>Nombre: {item.nombre}</p> <hr></hr>
                    <p>Cantidad: {item.cantidad}</p> <hr></hr>
                    <p>Total:{item.total}</p>
                  </div>
                  <hr></hr>
                  <button onClick={() => removeItem(item.id)}>X</button>
                </div>
              )}
            </div>
          </div>
        }
        <div className='d-flex justify-content-center'>
          <button className='btn btn-danger' onClick={emptyCart}>Vaciar carrito</button>
        </div>
      </div>)
      :
      <div className="text-center mt-5">
      <Link to="/"><h4>No tienes productos en tu carrito vuelve al catálogo</h4></Link>
      <img src="https://wowsushi.cl/static/images/cart/empty_cart.png" alt="carrito vacío" />
      </div>
      }
    </div>
  );
};

export default Carttotal


  //let resumen = [];
  //let montoFinal=0;
 // const [montoTotal, setMontoTotal] = useState()

/* const traerResumen = () => {
   cart.map((item) => {
     return resumen.push(parseInt(item.total))
   })
   resumen.forEach((total) => {
     montoFinal = montoFinal + total
     setMontoTotal(montoFinal)
   })
 } */
/*   useEffect(() => {
    return () => {
      traerResumen()
    }
  }, [cart]) */