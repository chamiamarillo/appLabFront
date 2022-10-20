import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import theme from '../Theme/theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <ThemeProvider createTheme={theme} >
    <Card sx={{ minWidth: 275 , minHeigth: 50}}  style={{ backgroundColor: "#b2dfdb" }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom title={`Pedido número ${numero_tp}`}
        subheader={`Fecha : ${fecha_solicitud}`}>
      {bull} {`Pedido número ${numero_tp}`}
       <p>{bull}{`Fecha : ${fecha_solicitud}`}</p>
          
        </Typography>
        <Typography variant="h5" component="div">
        <p>
              <strong>Laboratorio: </strong> {numero_laboratorio}
            </p>
            <p>
              <strong>Edificio: </strong> Malvinas
            </p>
           
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <p>
              <strong>Docente : </strong> {`${docente.nombre} ${docente.apellido}`}
            </p> 
        </Typography>
        <Typography variant="body2">
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
