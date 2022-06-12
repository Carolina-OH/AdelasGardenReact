import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBarComponent from "./Components/Navbar/NavBarComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}></Route>
        <Route path="/producto/:itemId" element={<ItemDetailContainer/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
