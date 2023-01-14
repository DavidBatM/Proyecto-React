import Counter from "./Components/Counter/Counter";
import CustomButton from "./Components/CustomButton/CustomButton";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer";
import {NavBar} from "./Components/NavBar/NavBar"


function App() {
  return (
    <div>
      <h1>
        <NavBar />
        <Counter />
        <ItemListContainer greeting = {"Bievenidos a nuestra pagina!"} />
      </h1>
      {/* <CustomButton texto={"login"} /> */}
    </div>
  );
}

export default App;
 /* los export pueden ser un monton 
 (estos van antes del function y se traen en el index.js con import {App, ejemplo2, ejemplo3} y puedo traer funciones),
 los export default no */
/* COMO EJECUTAR UNA FUNCION EN REACT <ItemListContainer a={"hola"} b={true} /> */