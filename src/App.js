import React,{useEffect,useState} from 'react';

import './App.css';
import Cards from './Components/Docente/Cards';

import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Iconos from './Components/Docente/Iconos';

import theme from './Components/Theme/theme';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Pedidos from "./Components/Laboratorio/Pedidos";

  
function App() {
  
  const [pantalla,setPantalla]=useState("login");

  // useEffect(() =>{
  //   setpantalla("login");
    
   
  // },[]);
    
  return (
    <ThemeProvider theme={theme}>
    
   
      { pantalla === "login" ? (
       
        <Login
        setPantalla={setPantalla}
        // pantalla={pantalla}
        />
      ) :(pantalla === "docente" ?(
        <Cards></Cards>
      ):(
       
     
     
      <Router>
        <Switch>
          <Route exact path="/Laboratorio/Pedidos">
            <Pedidos />
          </Route>
        </Switch>
      </Router>
      ))}
  
    
      
    
     
   </ThemeProvider>
  

  );
}

export default App;
