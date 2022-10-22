
import Pedido from "./Pedido";
import {getPedidosServiceTxt} from '../../Services/getPedidosServiceTxt';



import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import BotonNPedido from "./BotonNuevoPedido";
import NoEncontrados from "./NoEncontrados"



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
 

  useEffect(() => {
    let mounted = true;
    getPedidosServiceTxt()
      .then(items => {
        if (mounted) {
          setListaPedidos(items)
        }
      })
    return () => mounted = false;
  }, [])

 
  return (
    <div>
      <Box sx={{ flexGrow: 1 ,m:2}}>
          <Typography variant="body1" align='center' color="primary">
                    HEADER
          </Typography>
     </Box>

     { !(nuevoPedido) ?(
     
        <Box sx={{ flexGrow: 1 ,m:2}}>

              <BotonNPedido setNuevoPedido={setNuevoPedido}></BotonNPedido>
            

        </Box>
     ):( <NuevoPedido></NuevoPedido>)}
     {/* opcion pantalla */}

       <Box sx={{ flexGrow: 1 }}>
     
       {(listaPedidos.length <1) ?
        ( <NoEncontrados/>):(
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           {listaPedidos.map((pedido) => (
              <Grid item xs={2} sm={4} md={4} key={pedido.id}>
                <Pedido key={pedido.id} pedido={pedido} />
              </Grid>
         ))}
      </Grid>)}
     

      </Box>
     
    

    </div>
   
  );
}

export default Pedidos;