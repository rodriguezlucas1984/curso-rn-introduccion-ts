import Contador from "./components/Contador";
import ContadorConHook from "./components/ContadorConHook";
import { Formulario } from "./components/Formulario";
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
import Funciones from "./typescript/Funciones";
import ObjetosLiterales from "./typescript/ObjetosLiterales";
import TiposBasicos from "./typescript/TiposBasicos";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS - React</h1>
      <hr />
      <TiposBasicos />
      <ObjetosLiterales />
      <Funciones />
      <Contador />
      <ContadorConHook />
      <Login />
      <Usuarios />
      <Formulario />
    </div>
  );
};

export default App;
