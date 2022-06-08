import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBarComponent from './Components/Navbar/NavBarComponent.jsx'

function App() {

  return (
    <div className="App">
      <NavBarComponent/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
