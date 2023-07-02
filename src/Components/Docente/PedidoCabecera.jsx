
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import CheckIcon from '@mui/icons-material/Check';

import moment from 'moment'
import { Grid, Box, IconButton } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Popover from '@mui/material/Popover';


import Typography from '@mui/material/Typography';
import { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: 200,
  // },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: '#ff0000',
  
  height: 60,
  fontWeight: 600,
  width: 200,
  lineHeight: '60px',
}));


const lightTheme = createTheme({ palette: { mode: 'light' } });


const PedidoCabecera = (props) => {
  const classes = useStyles();
  const fecha = new Date();
  const hoy = new Date()
  const manana = hoy.setTime(hoy.getTime() + (2 * 24 * 60 * 60 * 1000))
  const maniana = new Date(manana)
  const formatManiana = (moment(maniana).format('YYYY-MM-DD')).toString();
  const fechaActual = (moment(fecha).format('DD/MM/YYYY'));
  const [confCabe, setConf] = useState(["block"]);

  // ************************
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const [mensajeAlerta,setMensajeAlerta]=useState("Fecha invalida")
  const handleClose = () => {
    props.setAnchorEl(null);
    if (mensajeAlerta ==="Faltan Cargar Datos"){
      setMensajeAlerta("Fecha invalida")
    } else{
    setMensajeAlerta("Faltan Cargar Datos")
  }}

  const open = Boolean(props.anchorEl);
  const id = open ? 'simple-popover' : undefined;
 
 
  const controlDia = (event) => { 
  
  if (event.target.value < formatManiana) {
    setMensajeAlerta("Fecha invalida")
  
    props.setAnchorEl(event.currentTarget)
  
  } }


  useEffect(() => {
    if (props.confirmacionCabecera === "block") {
       setConf("none")
    
       } 
    //    else {
    //      setMensajeAlerta("Faltan Cargar Datos")
    // };

    return () => { }
  }, [props.confirmacionCabecera,props.anchorEl])


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
            label="n° pedido"
            name="n_pedido"
            variant="outlined"
            value={props.cantidadPedidos + 1}

            autoFocus
          />

        </Grid>

        <Grid item xs={2} >
          <TextField
            id="fecha_solicitud"
            label="fecha solicitud"
            name="fecha_solicitud"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            
            value={fechaActual}
            margin="normal"
            disabled
            required
            fullWidth
            autoFocus
          />
        </Grid>
        <Grid item xs={2} >

        <TextField
        fullWidth
        margin='normal'
        id="fecha_utilizacion"
        label="fecha_utilizacion"
        type="date"
        min={formatManiana}
        defaultValue={formatManiana}
        name='fecha_utilizacion'
        required
        // helperText={"fecha > a 48 hs"}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={controlDia}
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


      </Grid>
      <Grid container direction="row"
        justifyContent="start"
        alignItems="center"

        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 12 }} >


        <Grid item xs={2} container justifyContent="start">



          <TextField
            margin="normal"
            required
            fullWidth
            id="cantidad_alumnos"
            label="cantidad alumnos"
            name="cantidad_alumnos"
            autoComplete="cantidad_alumnos"
            InputLabelProps={{ shrink: true }}
            autoFocus
            type="number"

            InputProps={{
              inputProps: {
                max: 100, min: 1
              }
            }}
          />
        </Grid>
        <Grid item xs={1}></Grid>





        <Grid item xs={2} container justifyContent="start" >

          <TextField
            fullWidth
            margin='normal'
            id="cantidad_grupos"
            variant="outlined"
            name="cant_grupos"
            label="cant grupos"
            type="number"
            required
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
        <Grid item xs={5} justifyContent="flex-end"></Grid>





        <Popover id={id}
          open={open}
          anchorEl={props.anchorEl}

          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}


        >

          <ThemeProvider theme={lightTheme}>

            <Item>
            {mensajeAlerta}
              
            </Item>

          </ThemeProvider>

        </Popover>



        <Grid item xs={1} justifyContent="flex-end" alignItems="end" display={confCabe} ></Grid>

        <Grid item xs={1} justifyContent="flex-end" alignItems="end" display={props.confirmacionCabecera} >
          <Avatar>
            <CheckIcon sx={{ fontSize: 35 }} color={"primary"} />
          </Avatar>
        </Grid>
        <Grid item xs={1} justifyContent="flex-end" alignItems="end" >



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