import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NuevoPedido from './Components/Docente/NuevoPedido'
import Pedidos from './Components/Docente/Pedidos'
import PedidoV1 from './Components/Docente/PedidoV1'
import Equipos from './Components/Laboratorio/Equipos'
import Materiales from './Components/Laboratorio/Materiales'
import Reactivos from './Components/Laboratorio/Reactivos'
import Alta_Equipo from './Components/ABM/AltaEquipo';

import Pedido from './Components/Docente/Pedidos';
import Usuarios from './Components/Laboratorio/Usuarios'
import Login from './Components/Login/Login'

import RedirectDocente from './Components/Login/RedirectDocente'
import RedirectLaboratorio from './Components/Login/RedirectLaboratorio'
import RedirectLog from './Components/Login/RedirectLog'
import { useContext } from 'react'
import { userContext } from './Context/LabProvider'
import { useEffect } from 'react'

const Main = () => {

    
    const {user, setUser} = useContext(userContext)


    useEffect(() => {
    if (localStorage.getItem("usuario")) {
        setUser(JSON.parse(localStorage.getItem("usuario")));
    }
    }, []);

    useEffect(() => {
        localStorage.setItem("usuario", JSON.stringify(user));
    }, [user]);

  return (
    <Routes>
        <Route path='/' element={<RedirectLog/>}>
            <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/" element={<RedirectDocente />} >
            <Route path='/Docente/Pedidos' element={<Pedido />} /> {/*home docentes*/}
            <Route path="/Docente/Pedidos/PedidoV1" element={<PedidoV1 />} />
            <Route path="/Docente/NuevoPedido" element={<NuevoPedido />} />          
        </Route>

        <Route path='/' element={<RedirectLaboratorio/>}>
            <Route path="/Laboratorio/Pedidos" element={<Pedidos />} /> {/*pedidos laboratorio*/}
            <Route path="/Laboratorio/Equipos" element={<Equipos/>}/>
            <Route path="/Laboratorio/Usuarios" element={<Usuarios/>}/>
            <Route path="/Laboratorio/Materiales" element={<Materiales/>}/>
            <Route path="/Laboratorio/Reactivos" element={<Reactivos/>}/>          
            <Route path="/ABM/AltaEquipo" element={<Alta_Equipo/>}/>
            </Route>
    </Routes>

  )
}

export default Main
