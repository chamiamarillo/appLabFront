import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Theme1 from '../Theme/Theme1';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
const BotonNPedido = ({setNuevoPedido}) => {
    return ( 
      <ThemeProvider theme={Theme1}>
        
        <Typography component="div" align='rigth'width={200} height={30} color={"blanco.main"} bgcolor={"verdeC.main"}   > 
        <Button 
         variant="contained" 
         
         style={{ width:200,height:30 }}
        startIcon={<AddCircleIcon />}
        onClick={() => {
          setNuevoPedido(true);
          
        }}>
          
            PEDIDO NUEVO
          
        </Button>
       
        </Typography>
    
        </ThemeProvider>
        
     );
}
 
export default BotonNPedido;