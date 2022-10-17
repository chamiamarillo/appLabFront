import { makeStyles } from "@material-ui/core";
import Pedido from "./Pedido";
import theme from '../Theme/theme';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
  marginTop: {
    //  marginTop: "100px",
    // height: "100vh",
    // marginLeft: "250px",
    display: "flex",
    flexDirection: "row",
    textAlign: "center"
  },
}));

function Pedidos() {
  const { marginTop } = useStyles();
  const [listaPedidos, setListaPedidos] = useState([]);
  const consultarAPI = async () => {
    try{
    
     const url= `texto.json`;
    const api = await fetch(url);
    
   
    const datos = await api.json();
   
    const pedidos=datos.pedidos;
    
    setListaPedidos(pedidos);
   
   
    }
    catch (error){
      console.log(error);
    }
  }
  useEffect(() => {
    // let mounted = true;
    consultarAPI(); 
    // return () => mounted = false;
  }, [])

 
  return (
    <ThemeProvider createTheme={theme}>

    <div className={marginTop}>
      
      {listaPedidos.map((pedido) => (
        <Pedido key={pedido.id} pedido={pedido} />
      ))}

    </div>
    </ThemeProvider>
  );
}

export default Pedidos;