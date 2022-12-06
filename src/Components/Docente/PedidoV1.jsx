import React from "react";
import { Icon, makeStyles } from "@material-ui/core";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Theme1 from '../Theme/Theme1';
import { ThemeProvider } from '@mui/material/styles';

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

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    margin:"8px",
    height:"240px"
    
  
  },
}));


function PedidoV1({ pedido }) {
  const { root } = useStyles();

  const {
    descripcion,
    numero_tp,
    fecha_solicitud,
    numero_laboratorio,
    docente,
    cantidad_grupos,
    lista_equipos
  } = pedido;
 const fechaActual=(moment(fecha_solicitud).format('DD/MM/YYYY'));
  //console.log(fecha_solicitud);
 // console.log(moment(fecha_solicitud).format('DD/MM/YYYY'));
  const [open, setOpen] = React.useState(false);
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
          subheader={`Fecha : ${fechaActual}`}
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

      <PedidoDetalle open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        scroll={scroll}
        pedido={pedido}
      ></PedidoDetalle>
    </ThemeProvider>
  );

}

export default PedidoV1;