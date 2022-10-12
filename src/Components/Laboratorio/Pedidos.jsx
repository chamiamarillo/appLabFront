import React from "react";
import { makeStyles } from "@material-ui/core";
import Pedido from "./Pedido";

const useStyles = makeStyles(() => ({
  marginTop: {
  //  marginTop: "100px",
   // height: "100vh",
   // marginLeft: "250px",
    display:"flex",
    flexDirection:"row",
    textAlign:"center"
  },
}));

function Pedidos() {
  const { marginTop } = useStyles();

  return (
    <div className={marginTop}>
      <Pedido></Pedido>
      <Pedido></Pedido>
      <Pedido></Pedido>
      <Pedido></Pedido>
      <Pedido></Pedido>
      <Pedido></Pedido>
    </div>
  );
}

export default Pedidos;