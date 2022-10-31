import React from "react";
import { Icon, makeStyles } from "@material-ui/core";
import AssignmentIcon from '@mui/icons-material/Assignment';
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
import PedidoDetalle from "./PedidoDetalle";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "8px",
      height: "240px"
    },
  },
}));


function Pedido({ pedido }) {
  const { root } = useStyles();

  const {
    numero_tp,
    fecha_solicitud,
    numero_laboratorio,
    docente,
  } = pedido;

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
    <div>
      <Box className={root}>
        <Card style={{ backgroundColor: "#b4e0bc" }}>
          <CardActionArea onClick={handleClickOpen('body')}>
            <CardHeader
              style={{ textAlign: "left" }}
              avatar={
                <Avatar>
                  <AssignmentIcon />
                </Avatar>
              }
              title={`Pedido número ${numero_tp}`}
              subheader={`Fecha : ${fecha_solicitud}`}
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
    </div>
  );

}

export default Pedido;