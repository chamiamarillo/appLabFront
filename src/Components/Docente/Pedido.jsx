import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Theme1 from '../Theme/Theme1';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StayPrimaryLandscape } from '@material-ui/icons';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Pedido({pedido}) {
  const {
    numero_tp,
    fecha_solicitud,
    numero_laboratorio,
    docente
  } = pedido;
  return (
    <ThemeProvider theme={Theme1}>
    
    
    <Card component="div" style={{display:'flex',margin:"8px", height:"240px" ,backgroundColor: "#b4e0bc"  }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }}  >
        <p><strong>Pedido número : </strong>{numero_tp}</p>
       <p><strong>Fecha :</strong>{fecha_solicitud}</p>
          
        </Typography>
        <Typography  sx={{ fontSize: 14 }} component="div">
        <p>
              <strong>Laboratorio: </strong> {numero_laboratorio}
            </p>
            <p>
              <strong>Edificio: </strong> Malvinas
            </p>
           
        </Typography>
        <Typography sx={{fontSize: 14}} color="text.secondary">
            <p>
              <strong>Docente : </strong> {`${docente.nombre} ${docente.apellido}`}
            </p> 
        </Typography>
        <Typography sx={{fontSize: 14}}>
        <p>
              <strong>Estado: </strong>Aceptado
            </p>
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Mas Detalles</Button>
      </CardActions>
    </Card>
   
    </ThemeProvider>

  );
}
