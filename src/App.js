import React from 'react';

import './App.css';


import Login from './Components/Login/Login';


import PedidoV1 from './Components/Docente/PedidoV1'
import NuevoPedido from './Components/Docente/NuevoPedido';



import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Docente from './Components/Docente/Pedidos';


import Pedidos from "./Components/Laboratorio/Pedidos";

import Alta_Equipo from './Components/ABM/AltaEquipo';
import Principal from './Components/ABM/Principal';
import Equipos from './Components/Laboratorio/Equipos';
import Usuarios from './Components/Laboratorio/Usuarios';
import Materiales from './Components/Laboratorio/Materiales'
import Reactivos from './Components/Laboratorio/Reactivos'
function App() {




  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/Docente/Pedidos" element={<Docente />} />

        <Route path="/Laboratorio/Pedidos" element={<Pedidos />} />

        <Route path="/Laboratorio/Equipos" element={<Equipos/>}/>
        <Route path="/Laboratorio/Usuarios" element={<Usuarios/>}/>
        <Route path="/Laboratorio/Materiales" element={<Materiales/>}/>
        <Route path="/Laboratorio/Reactivos" element={<Reactivos/>}/>
        
        <Route path="/Docente/Pedidos/PedidoV1" element={<PedidoV1 />} />

        <Route path="/Docente/NuevoPedido" element={<NuevoPedido />} />
        <Route path="/ABM/AltaEquipo" element={<Alta_Equipo/>}/>

        <Route path="/ABM/Principal" element={<Principal/>}/>

      </Routes>


    </BrowserRouter>

  );
}

export default App;
