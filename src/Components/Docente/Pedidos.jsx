import { makeStyles } from "@material-ui/core";
import Pedido from "./Pedido";
import theme from '../Theme/theme';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const useStyles = makeStyles(() => ({
//   marginTop: {
//     //  marginTop: "100px",
//     // height: "100vh",
//     // marginLeft: "250px",
//     display: "flex",
//     flexDirection: "row",
//     textAlign: "center"
//   },
// }));

function Pedidos() {
 
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
      <Box sx={{ flexGrow: 1 }}>
      <Typography variant="body1" align='center' color="primary">
                al centro
     </Typography>
     <DeleteIcon
           color="primary"
            fontSize="large"
             />

            <Icon
             color="primary">
            star
            </Icon>

<Button 
variant="contained" 
color="primary" 
startIcon={<DeleteIcon />}>
  Eliminar
</Button>
<Button 
variant="outlined" 
color="primary" 
endIcon={<AttachFileIcon />}> 
{/* //{acomoda al final el icnoco} */}
  Adjuntar
</Button>
<Button 
variant="text" 
color="secondary" 
endIcon={<AccessAlarmIcon 
  color='secondary'
  
  fontSize='small'/>}> 
{/* //{acomoda al final el icnoco} */}
  Colocar Hora
</Button>

     </Box>
       <Box sx={{ flexGrow: 1 }}>
     
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {listaPedidos.map((pedido) => (
        <Grid item xs={2} sm={4} md={4} key={pedido.id}>
          <Pedido key={pedido.id} pedido={pedido} />
        </Grid>
  ))}
      </Grid>
      </Box>

    
    </ThemeProvider>
  );
}

export default Pedidos;