import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Theme1 from '../Theme/Theme1';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';

import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

// const ColorButton = styled(Button)(({ theme=Theme1 }) => ({
//   color: theme.palette.getContrastText("primary"),
//   backgroundColor: primary.fondo,
//   '&:hover': {
//     backgroundColor: primary.letra,
//   },
// }));

const BotonNPedido = ({ setNuevoPedido }) => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={Theme1}>


      <Grid container justifyContent="flex-end"
      >
        <Grid item xs={2}  height={50} 
         bgcolor={"primary.main"} borderRadius={2}

        >
          {/* <Typography
            //component="button" 
            borderRadius={8}
            borderColor={"gris"}
            align='rigth' width={200}
             height={50} color={"gris.main"} bgcolor={"secondary.main"}   > */}
            <Button
              fullWidth
             style={{   height: 50 ,borderRadius:8}}
              margin="normal"
              variant="contained"
              endIcon={<SendIcon />}
              color="primary"
              borderRadius={4}
              onClick={() => {
                navigate('/Docente/NuevoPedido')
                setNuevoPedido(true);
              }}>

              PEDIDO NUEVO</Button>
          {/* </Typography> */}


        </Grid>
      </Grid>


      


    </ThemeProvider>

  );
}

export default BotonNPedido;