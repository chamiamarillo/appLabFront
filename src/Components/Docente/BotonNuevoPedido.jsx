import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';

const BotonNPedido = ({setNuevoPedido}) => {
    return ( 
       
        <Typography variant="body1" align='right' >    
        <Button 
         variant="contained" 
        // color='secondary'
        style={{ backgroundColor: "#b4e0bc",width:200,height:30 }}
        startIcon={<AddCircleIcon />}
        onClick={() => {
          setNuevoPedido(true);
          
        }}>
          
            PEDIDO NUEVO
          
        </Button>
        </Typography>
      
        
     );
}
 
export default BotonNPedido;