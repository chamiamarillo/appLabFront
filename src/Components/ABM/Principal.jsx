import React from "react";
import { Icon, makeStyles,Button } from "@material-ui/core";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Theme1 from '../Theme/Theme1';
import { ThemeProvider} from '@mui/material/styles';
// import { getUsuario } from '../../Services/getUsuarioService';
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
import AltaEquipo from "./AltaEquipo";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    margin: "8px",
    height: "240px"


  },
}));


function Principal() {
  // const { root } = useStyles();



  
  
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
      <Box sx={{ m: 20 }} styles={{
        display: "flex",
        margin: "8px",
        height: "240px"
      }} padding="2px">
                <Card style={{margin:30, backgroundColor: "#b4e0bc",width:140,height:40, borderRadius: 15 }}>
          <CardActionArea onClick={handleClickOpen('body')}>
       
Principal
       
         </CardActionArea>
         </Card>
      </Box>
   
       <AltaEquipo 
      
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          scroll={scroll}
         
        />

    </ThemeProvider>
  );

}

export default Principal;