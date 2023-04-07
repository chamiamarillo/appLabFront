import React from 'react'
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'; 

function AsignarLaboratorio (pedido,setEdicionActiva)  {
  const navigate=useNavigate();

  const re_direccion=()=>{
    setEdicionActiva(false) 
      navigate("/Laboratorio/Pedidos");

    
    }
  return (
    <div>
       <Button onClick={re_direccion}
                     style={{ borderRadius: 8 }}
                     variant="contained"
                    bgcolor={"secondary"} color={"primary"}>
                        volver a pedidos
                     </Button>   
     </div>
  )
}

export default AsignarLaboratorio