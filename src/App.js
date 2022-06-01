import './App.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import NavBarComponent from './Components/Navbar/NavBarComponent.jsx'

function App() {
  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
