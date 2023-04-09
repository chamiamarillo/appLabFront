import React from 'react';

import './App.css';


import Login from './Components/Login/Login';


import PedidoV1 from './Components/Docente/PedidoV1'
import NuevoPedido from './Components/Docente/NuevoPedido';



import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Docente from './Components/Docente/Pedidos';


import Pedidos from "./Components/Laboratorio/Pedidos";


function App() {




  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/Docente/Pedidos" element={<Docente />} />

        <Route path="/Laboratorio/Pedidos" element={<Pedidos />} />

        <Route path="/Docente/Pedidos/PedidoV1" element={<PedidoV1 />} />

        <Route path="/Docente/NuevoPedido" element={<NuevoPedido />} />
        

      </Routes>


    </BrowserRouter>

  );
}

export default App;
