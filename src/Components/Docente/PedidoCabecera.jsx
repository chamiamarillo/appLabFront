
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';




import { Grid, Box } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';



import Typography from '@mui/material/Typography';


const PedidoCabecera = (props) => {
  return (
    <div> <Grid container component="form" onSubmit={props.cargaEncabezado} noValidate direction="row"
    justifyContent="space-around"
    alignItems="center"

    sx={{
      '--Grid-borderWidth': '1px', borderTop: 'var(--Grid-borderWidth) solid',
      borderLeft: 'var(--Grid-borderWidth) solid',
      borderRight: 'var(--Grid-borderWidth) solid',
      borderBottom: 'var(--Grid-borderWidth) solid',
      borderColor: 'divider', paddingX: 2, borderRadius: 4, paddingY: 1, marginBottom: 3
    }}
    spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }}>
    <Grid container direction="row"
      justifyContent="start"
      alignItems="center"
      spacing={{ xs: 4, md: 2 }}
      columns={{ xs: 12 }} >


      <Grid item xs={1} >
        <TextField
          margin="normal"
          // required
          fullWidth
          id="n_pedido"
          label="n_pedido"
          name="n_pedido"
          variant="outlined"
          value={props.cantidadPedidos + 1}
          
          autoFocus
        />

      </Grid>

      <Grid item xs={2} >
        <TextField
          id="fecha_solicitud"
          label="fecha_solicitud"
          name="fecha_solicitud"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: false,
          }

          }
          margin="normal"
          required
          fullWidth
          autoFocus
        />
      </Grid>
      <Grid item xs={2}  >


        <TextField
          id="fecha_utilizacion"
          label="fecha_utilizacion"
          name="fecha_utilizacion"
          type="date"
          // sx={{ width: 180 }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          required
          fullWidth
          autoFocus
        />
      </Grid>
      <Grid item xs={2} >

        <TextField
          id="time"
          label="hora"
          name="hora"
          type="time"
          defaultValue="08:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
         
          margin="normal"
          required
          fullWidth
          autoFocus
        />
      </Grid>
      <Grid item xs={2} >
        <TextField
          margin="normal"
         
          fullWidth
          id="materia"
          label="materia"
          name="materia"
          InputLabelProps={{ shrink: true }}
          autoComplete="materia"
          autoFocus
        />

      </Grid>
    </Grid>
    <Grid container direction="row"
      justifyContent="flex-end"
      alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >

      <Grid item xs={1} container justifyContent="center">
        <Typography sx={{ fontSize: 14 }} aria-label="simple table" color="text.secondary">
          Confirmar
        </Typography>
      </Grid>
      <Grid item xs={1} container justifyContent="center">

      </Grid>


    </Grid>
    <Grid container direction="row"
      justifyContent="start"
      alignItems="center"

      spacing={{ xs: 2, md: 1 }}
      columns={{ xs: 12 }} >


      <Grid item xs={4} container justifyContent="start">



        <TextField
          margin="normal"
          required
          fullWidth
          id="cantidad_alumnos"
          label="cantidad_alumnos"
          name="cantidad_alumnos"
          autoComplete="cantidad_alumnos"
          InputLabelProps={{ shrink: true }}
          autoFocus
        />
      </Grid>
      <Grid item xs={1}></Grid>





      <Grid item xs={3} container justifyContent="start" >

        <TextField
          sx={{ marginTop: 1 }}

          id="cantidad_grupos"
          variant="outlined"
          name="cantidad_grupos"
          label="cant_grupos"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: {
              max: 100, min: 0
            }
          }}

        />

      </Grid>
      <Grid item xs={2} justifyContent="flex-end"></Grid>

      <Grid item xs={1} justifyContent="flex-end">


        
        <Button fullWidth
          margin="normal"
        variant="text"
        type="submit"
        >
      <Avatar> 
                <AddCircleIcon bgcolor={"secondary"} color={"primary"} />
      </Avatar>
    </Button>                          
      </Grid>
    </Grid>
  </Grid>
  </div>
  )
}

export default PedidoCabecera