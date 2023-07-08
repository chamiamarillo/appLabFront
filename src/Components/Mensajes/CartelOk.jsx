import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Ok from '../Image/ok.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ok_simbolo from '../Image/ok_simbolo.jpg'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const CartelOk = (props) => {


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

        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}


      >

        <Card sx={{
          display: 'flex', p: 2,
          height: 180,
          fontWeight: 700,
          width: 500, border: 2, borderColor: 'secondary.oscuro', color: 'secondary.oscuro', textAlign: 'center', borderRadius: 2
        }} >
          <CardMedia
            component="img"
            sx={{ width: 151, height: 150, }}
            image={ok_simbolo}
            alt="ok"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, p: 1 }}>EL PEDIDO SE CARGÓ </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, p: 1 }}> EXITOSAMENTE     </Typography>

              <Button
                margin="normal"
                variant="contained"
                type='text'

                onClick={props.handleClose2}
                sx={{ color: 'secondary' }}
              >
                Click para continuar
              </Button>



            </CardContent>
          </Box>


        </Card>



      </Popover>
    </div>
  )
}

export default CartelOk