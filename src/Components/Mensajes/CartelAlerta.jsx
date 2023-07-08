import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';




  
 

const CartelAlerta = (props) => {
  return (
    <div>
         <Popover
      id={props.id}
      open={props.open}
      anchorEl={props.anchorEl}
     
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
    >

    
      <Typography
       sx={{ p: 2 ,
      height: 70,
    fontWeight: 900,
    width: 400,border:3,borderColor:'red',color:'red',textAlign:'center',borderRadius:2}}> 
    {props.mensajeAlerta}
    </Typography>
      
    </Popover>
   
       </div>
  )
}

export default CartelAlerta
