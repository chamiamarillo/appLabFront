import React from 'react'
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: '#ff0000',
  
    height: 60,
    fontWeight: 700,
    width: 400,
    lineHeight: '60px',
  }));
  
  
  const lightTheme = createTheme({
    palette: { mode: 'light' }
  });
  

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

      <ThemeProvider theme={lightTheme}>

        <Item>
          {props.mensajeAlerta}

        </Item>

      </ThemeProvider>

    </Popover>
   
       </div>
  )
}

export default CartelAlerta
