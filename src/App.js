import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBarComponent from "./Components/Navbar/NavBarComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
import React from 'react';


function App() {


  return (
    <CartProvider>
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
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>

  );
}

export default App;
