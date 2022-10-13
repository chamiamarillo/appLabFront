import { makeStyles } from "@material-ui/core";
import Pedido from "./Pedido";
import { getListaPedidos } from "../../Services/getPedidosService";
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
  marginTop: {
    //  marginTop: "100px",
    // height: "100vh",
    // marginLeft: "250px",
    display: "flex",
    flexDirection: "row",
    textAlign: "center"
  },
}));

function Pedidos() {
  const { marginTop } = useStyles();
  const [listaPedidos, setListaPedidos] = useState([]);

  useEffect(() => {
    let mounted = true;
    getListaPedidos()
      .then(items => {
        if (mounted) {
          console.log(items);
          setListaPedidos(items)
          console.log(listaPedidos);
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className={marginTop}>
      
      {listaPedidos.map((pedido) => (
        <Pedido key={pedido.id} pedido={pedido} />
      ))}

    </div>
  );
}

export default Pedidos;