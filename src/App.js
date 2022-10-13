import './App.css';
import Cards from './Components/Cards';
import Registrarse from './Components/Registrarse';
import Datos from './Components/Datos';
import Iconos from './Components/Iconos';
import Barra from './Components/Barra';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Pedidos from "./Components/Laboratorio/Pedidos";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/Laboratorio/Pedidos">
            <Pedidos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
