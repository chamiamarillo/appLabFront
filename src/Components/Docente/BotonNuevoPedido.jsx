import React, { useEffect, useState } from 'react';
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Theme1 from '../Theme/Theme1';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';

import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';




const BotonNPedido = ({ setNuevoPedido }) => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={Theme1}>


      <Grid container justifyContent="flex-end"
      >
        <Grid item xs={2}  
         sx={{borderRadius: 2, height: 50 , border: 1, boxShadow:3,marginRight:4}}
        // height={50} 
          bgcolor={"primary.main"}
          color={"blanco.main"}
          //  borderRadius={2}
         
        >
          
       
          
            <Button
              fullWidth
             style={{   height: 50 ,
              borderRadius:6
          }}
              margin="normal"
              variant="contained"
              endIcon={<SendIcon />}
             
              
              // borderRadius={4}
              onClick={() => {
                navigate('/Docente/NuevoPedido')
                setNuevoPedido(true);
              }}>

              PEDIDO NUEVO</Button>
       

        
        </Grid>
      </Grid>


      


    </ThemeProvider>

  );
}

export default BotonNPedido;