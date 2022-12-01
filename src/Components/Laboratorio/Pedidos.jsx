import { makeStyles } from "@material-ui/core";
import Pedido from "./Pedido";
import { getListaPedidos } from "../../Services/getPedidosService";
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Theme1 from '../Theme/Theme1';
import Header from '../Header/Header'
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import NoEncontrados from "../Docente/NoEncontrados"

const useStyles = makeStyles(() => ({
  marginTop: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center"
  },
}));

function Pedidos() {
  const { marginTop } = useStyles();
  const [listaPedidos, setListaPedidos] = useState([]);
  const [texto,setEncabezado]=useState("Laboratorio");
  useEffect(() => {
    let mounted = true;
    getListaPedidos()
      .then(items => {
        if (mounted) {
          setListaPedidos(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <ThemeProvider theme={Theme1}>
      <Box sx={{ flexGrow: 1 ,m:2}}>
        <Header texto={texto} ></Header>
     </Box>
     {(listaPedidos.length <1) ?
        ( <Box sx={{ flexGrow: 1 ,md:2 }}><NoEncontrados/></Box>)
      : (
     <Box sx={{ flexGrow: 1 ,md:2 }}>    
            <Grid container direction="row"
            justifyContent="space-around"
            alignItems="center"  
            spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm:6 , md: 12 }}>
      
      {listaPedidos.map((pedido) => (
        <Grid item xs={3}  key={pedido.id}>
        <Pedido key={pedido._id} pedido={pedido} />
        </Grid>
      ))}
    </Grid>
    </Box>)}
    </ThemeProvider>
  );
}

export default Pedidos;