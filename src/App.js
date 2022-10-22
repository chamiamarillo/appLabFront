import React,{useEffect,useState} from 'react';

import './App.css';


import Login from './Components/Login/Login';
import Header from './Components/Header/Header';


import theme from './Components/Theme/Theme1';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter , Switch, Route,Router,Routes } from "react-router-dom";
import Docente from './Components/Docente/Pedidos' ;


import Pedidos from "./Components/Laboratorio/Pedidos";

  
function App() {
  
  
  
    
  return (
    <BrowserRouter>
     
      <Routes>
    
          <Route  path="/" element={<Login/>} />
        
          <Route  path="/Docente/Pedidos"element={<Docente/>}/> 
         
          <Route  path="/Laboratorio/Pedidos" element={<Pedidos/>}/>
          
      
    
        
         
          </Routes>   
      
    
    </BrowserRouter>

  );
}

export default App;
