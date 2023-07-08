import React, { useEffect,useState } from 'react'
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Ok from '../Image/ok.jpg'

const CartelOk = (props) => {
console.log("QUELO PARIÓ"+props.anchorE2);
const [anchorEl, setAnchorEl] = useState("");

const open = Boolean(anchorEl);
 const id = open ? 'simple-popover' : undefined;

 useEffect(() => {
   setAnchorEl(props.anchorE2)
 
   return () => {
   
   }
 }, [props.anchorE2])
 



  return (
    <div>
         <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={props.handleClose2}
      // transitionDuration={6000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}


    >
      <Typography 
       sx={{ p: 2 ,
        height: 150,
      fontWeight: 700,
      width: 500,border:2,borderColor:'red',color:'red',textAlign:'center',borderRadius:2}}> 

     <img width={400} alt="" heigth={70} src={Ok}  />
    
   
    </Typography>

      

    </Popover>
    </div>
  )
}

export default CartelOk