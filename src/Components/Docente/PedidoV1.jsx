import React, { useState } from "react";
import { Icon, makeStyles } from "@material-ui/core";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Theme1 from '../Theme/Theme1';
import { ThemeProvider } from '@mui/material/styles';
import{getUsuario} from '../../Services/getUsuarioService';
import moment from 'moment'
import {
  Box,
  Card,
  CardContent,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PedidoDetalle from "../Laboratorio/PedidoDetalle";
import PedidoDetalleLabo from "../Laboratorio/PedidoDetalleLabo";


const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    margin:"8px",
    height:"240px"
    
  
  },
}));


function PedidoV1({ pedido  ,esAdmin,setEdicionActiva,edicionActiva}) {
  const { root } = useStyles();
  
 
   
  const {
    descripcion,
    numero_tp,
    fecha_utilizacion,
    fecha_solicitud,
    numero_laboratorio,
    docente,
    cantidad_grupos,
    lista_equipos
  } = pedido;
 const fechaActual=(moment(fecha_utilizacion).format('DD/MM/YYYY'));
 
  const [open, setOpen] = React.useState("");
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <ThemeProvider theme={Theme1}>
      <Box sx={{m:10}} styles={{display: "flex",
    margin:"8px",
    height:"240px" }} padding="2px">
        <Card style={{ backgroundColor: "#b4e0bc",borderRadius: 15 }}>
          <CardActionArea onClick={handleClickOpen('body')}>
            <CardHeader
              style={{ textAlign: "left" }}
              avatar={
                <Avatar>
                  <AssignmentIcon />
                </Avatar>
              }
              title={`Pedido número ${descripcion}`}
           // subheader={`Fecha : ${fecha_solicitud}`}
          subheader={`Fecha de Utilización : ${fechaActual}`}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardMedia
              style={{ paddingTop: "3%" }}
              image="./media/background.png"
              title="Background image"
            />
            <CardContent style={{ textAlign: "left" }}>
              <p>
                <strong>Laboratorio: </strong> {numero_laboratorio}
              </p>
              <p>
                <strong>Edificio: </strong> Malvinas
              </p>
              <p>
                <strong>Docente : </strong> {`${docente.nombre} ${docente.apellido}`}
              </p>
              <p>
                <strong>Estado: </strong>Aceptado
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      {!(esAdmin)
      ?(<PedidoDetalle open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        scroll={scroll}
        pedido={pedido}
      ></PedidoDetalle>)
      :(
      <PedidoDetalleLabo open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        scroll={scroll}
        pedido={pedido}
        setEdicionActiva={setEdicionActiva}
        edicionActiva={edicionActiva}
      ></PedidoDetalleLabo>)
    }

    </ThemeProvider>
  );

}

export default PedidoV1;