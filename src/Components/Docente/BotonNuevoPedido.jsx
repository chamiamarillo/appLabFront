import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';

const BotonNPedido = ({setNuevoPedido}) => {
    return ( 
       
        <Typography variant="body1" align='right' color="primary">    
        <Button 
        variant="contained" 
        color='secondary'
        
        startIcon={<AddCircleIcon />}
        onClick={() => {
          setNuevoPedido(true);
          alert('clicked');
        }}>
          
            PEDIDO NUEVO
          
        </Button>
        </Typography>
      
        
     );
}
 
export default BotonNPedido;