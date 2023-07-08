import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


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
      <Card sx={{
            p: 2,
            height: 100,
            fontWeight: 900,
            width: 400, border: 2, borderColor: 'red', color: 'red', textAlign: 'center', borderRadius: 2
          }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h9" sx={{ fontWeight: 700}}>  {props.mensajeAlerta} </Typography>
             </CardContent>

       

        </Card>

      </Popover>

    </div>
  )
}

export default CartelAlerta
