import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBarComponent from "./Components/Navbar/NavBarComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./Context/CartContext";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (item) => {
    setCart([...cart, item]);
    alert(`añadiste ${item.cantidad} a tu carrito`)
  };

  const isInCart = (id)=>{
    return cart.some((prod)=>prod.id===id)
  }
  return (
    <CartContext.Provider value={{ cart, addItem, isInCart }}>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          ></Route>
          <Route
            path="/producto/:itemId"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
