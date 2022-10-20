
import Pedido from "./Pedido";
import theme from '../Theme/theme';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import BotonNPedido from "./BotonNuevoPedido";
import NoEncontrados from "./NoEncontrados"
import { Icon,IconButton } from '@mui/material';


// 
import Typography from '@mui/material/Typography';
import NuevoPedido from "./NuevoPedido";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Pedidos() {
  const [nuevoPedido, setNuevoPedido] = useState(false);
 
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
      <Box sx={{ flexGrow: 1 ,m:2}}>
      <Typography variant="body1" align='center' color="primary">
              HEADER
     </Typography>
     </Box>
     { !(nuevoPedido) ?(
      <div>
     <Box sx={{ flexGrow: 1 ,m:2}}>

     <BotonNPedido setNuevoPedido={setNuevoPedido}></BotonNPedido>
    

        

     </Box>
       <Box sx={{ flexGrow: 1 }}>
     
       {
        (listaPedidos.length > 0) ?
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {listaPedidos.map((pedido) => (
        <Grid item xs={2} sm={4} md={4} key={pedido.id}>
          <Pedido key={pedido.id} pedido={pedido} />
        </Grid>
  ))}
      </Grid>
      :
      <NoEncontrados/>
}
      </Box>
      </div>
    ):(
      <NuevoPedido></NuevoPedido>
    )}

    
    </ThemeProvider>
  );
}

export default Pedidos;