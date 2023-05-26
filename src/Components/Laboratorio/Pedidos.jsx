import { makeStyles } from "@material-ui/core";
import PedidoV1 from "../Docente/PedidoV1";
import { getListaPedidos } from "../../Services/getPedidosService";
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Theme1 from '../Theme/Theme1';
import Header from '../Header/Header'
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import NoEncontrados from "../Docente/NoEncontrados"
import Filtros from "./Filtros";
import { axiosGetPedido } from '../../Services/getPedidosService';

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
  const [texto, setEncabezado] = useState("Laboratorio");
  const [esAdmin, setEsAdmin] = useState(true)

  const [edicionActiva, setEdicionActiva] = useState(false)



/********************************************** */  
const [tipo_pedido,  setTipoPedido] = React.useState("");
const [fecha_utilizacion, set_fecha_utilizacion] = React.useState("");
const [fecha_inicio, set_fecha_inicio] = React.useState("");
const [fecha_fin, set_fecha_fin] = React.useState("");
const [edificio, set_edificio] = React.useState("");


  
  const cargarEstado = (event) => {
    // const dato=event.target.value
    event.preventDefault();
    console.log(event.target.value)
    guardarEstadoPedido(event.target.value)
    // cargarNuevosPedidos()
    
   
   
    

}
const guardarEstadoPedido=(event)=>{setTipoPedido(event)}


function cargarNuevosPedidos() {
console.log("se guarda algo en el estado",tipo_pedido);
    axiosGetPedido(fecha_utilizacion, tipo_pedido, fecha_inicio, fecha_fin, edificio).then((item) => {setListaPedidos(item)}
    
   
   );
  
};
useEffect(()=>{
  
    cargarNuevosPedidos()

  

//  }
  // if (tipo_pedido.length>0 ||){
  //   if (tipo_pedido=="TODOS")  {
  //      getListaPedidos()
  //           .then(items => { 
       
  //       setListaPedidos(items)});
  //    }
  //   else{
  //   cargarNuevosPedidos()

  // }

//  }
      
},[tipo_pedido,fecha_fin,edificio])

  useEffect(() => {
    let mounted = true;
    const userActual = JSON.parse(localStorage.getItem('usuario'));
    setEsAdmin(userActual.admin)
    console.log("voy a pedir los pedidos");
    getListaPedidos()
      .then(items => {
        if (mounted) {
          console.log("voy a setear los pedidos");
          setListaPedidos(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <ThemeProvider theme={Theme1}>
      <Box sx={{ flexGrow: 1, m: 2 }}>
        <Header texto={texto} ></Header>
      </Box>
      <Filtros
      cargarEstado={cargarEstado}
      fecha_fin={fecha_fin}
      set_fecha_fin={set_fecha_fin}
      set_fecha_inicio={set_fecha_inicio}
      fecha_inicio={fecha_inicio}
      edificio={edificio}
      set_edificio={set_edificio}
      />
      {(listaPedidos.length < 1) ?
        (<Box sx={{ flexGrow: 1, md: 2 }}><NoEncontrados /></Box>)
        : (
          <Box sx={{ flexGrow: 1, md: 2 }}>
            <Grid container direction="row"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 8,
                m: 4,
              }}
              alignItems="space-between"
              spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }}>

              {listaPedidos.map((pedido) => (
                <Grid item xs={3} key={pedido._id}>

                  <PedidoV1 key={pedido._id}
                    pedido={pedido} esAdmin={esAdmin}
                    edicionActiva={edicionActiva} setEdicionActiva={setEdicionActiva} />
                </Grid>
              ))}
            </Grid>
          </Box>)}
    </ThemeProvider>
  );
}

export default Pedidos;