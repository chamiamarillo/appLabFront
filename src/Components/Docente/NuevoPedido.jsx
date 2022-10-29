
import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';

import Header from '../Header/Header'
import Paper from '@mui/material/Paper';
import Theme1 from '../Theme/Theme1';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import laboratorio from '../Image/biologia.png'
import pipeta from '../Image/pipeta.png'
import quimica from '../Image/quimica.png'
import Autocomplete from '@mui/material/Autocomplete';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';


//const theme = createTheme();



export default function NuevoPedido() {
//PRUEBA CODIGO
  const [cantEquipo, setCantEquipo] = React.useState('');

  const handleChange = (event) => {
    setCantEquipo(event.target.value);
  };
  
  //PRUEBA CODIGO
  const [texto,setEncabezado]=useState("CARGA DE PEDIDO");
  const unpedido= {docente: {
    "nombre": "Pedro",
    "apellido": "Pelota",
    "dni": 7897,
    "matricula": 1233457
},

"descripcion": "Pedido 2",
"numero_laboratorio": 21,
"tipo_pedido": "algo",
"cantidad_grupos": 2,
"observaciones": "algo mas",
"materia": "materia",
"numero_tp": 2,
"lista_equipos": [
    {
      
        "cantidad": 4,
        "equipo": "634dffe0a23c83b43524c5c2"
    },
    {
       
        "cantidad": 14,
        "equipo": "634dffe0a23c83b43524c5c2"
    }
]
}
const equipos=[{label:'Bomba p/vacio Arcano dos etapas '},{label:'Cabina Flujo laminar '},{label:'Campana para extracción de gases Biotec '},{label:'Campana para extracción gases Biotraza FH1200 '},{label:'Destilador Arcano GZ-10 lts '},{label:'Electrodo Redox/ORP MTC10105 n/s: 163563029004 / 163623029001 / 170093029002 '},{label:'Electrodo Redox/ORP MTC301 n/s: 163653018008 '},{label:'Electrodo Redox/ORP MTC301 n/s: 170033018005 '},{label:'Electroporador a micropulso BioRad '},{label:'Freezer vertical modelo FEDE -35 '},{label:'Heladera Righi 520-4 '},{label:'Heladera Samsung 370L '},{label:'Lavador ultrasónico PS-40 Arcano '}
];
const numeros=[{label:"1"},{label:"2"},{label:"3"},{label:"4"},{label:"5"},{label:"6"},{label:"7"},{label:"8"},{label:"9"},{label:"10"},{label:"11"},{label:"12"},{label:"13"}
]
 
  const handleSubmit = (event) => {
    event.preventDefault();
    

    const data = new FormData(event.currentTarget);

    console.log({
      usuario: data.get('descripcion_materiales'),
      password: data.get('cant_material'),
    });
    // setPantalla(data.get('user').toLowerCase());

  };

  return (
    <ThemeProvider theme={Theme1}>
       <Box sx={{ flexGrow: 1 ,m:2}}>
          
          <Header texto={texto} ></Header>

       </Box>
    {/* COMIENZA EL CONTENEDOR DE LA PAGINA    */}
      <Container component="main"  color="primary">
        
     {/* COMIENZA EL CONTENEDOR DEL BLOQUE SUPERIOR    */}    
          
     <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box sx={{ flexGrow: 1 ,md:2 }}>    
           
     
          <Grid container direction="row"
            justifyContent="space-around"
            alignItems="center"  
          
            
          
            sx={{'--Grid-borderWidth': '1px',borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',paddingX:2,borderRadius:4,paddingY:1,marginBottom:3
            }}
            spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }}> 
             <Grid item xs={4}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="numero_pedido"
                    label="numero_pedido"
                    name="numero_pedido"
                    value={unpedido.numero_tp}
                    autoComplete={"numero_pedido"}
                    autoFocus
                  />
                 
              </Grid> 
              <Grid item xs={4}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="numero_laboratorio"
                    label="numero_laboratorio"
                    name="numero_laboratorio"
                    autoComplete="numero_laboratorio"
                    autoFocus
                  />
              </Grid>
            <Grid item xs={4}>


              <TextField
                margin="normal"
                required
                fullWidth
                id="edificio"
                label="edificio"
                name="edificio"
                autoComplete="edificio"
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>


              <TextField
                margin="normal"
                required
                fullWidth
                id="cantidad_alumnos"
                label="cantidad_alumnos"
                name="cantidad_alumnos"
                autoComplete="cantidad_alumnos"
                autoFocus
              />
              </Grid>
              <Grid item xs={6}>


              <TextField
                margin="normal"
                required
                fullWidth
                id="cantidad_grupos"
                label="cantidad_grupos"
                name="cantidad_grupos"
                autoComplete="cantidad_grupos"
                autoFocus
              />
            </Grid>
           
            </Grid>

{/* COMIENZA CONTENEDOR DE EQUIPOS */}
<Grid container direction="row"
            justifyContent="space-around"
            alignItems="center"  
            sx={{'--Grid-borderWidth': '1px',borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',paddingX:2,borderRadius:4,paddingY:1,marginBottom:3
            }}
            spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }}> 

            {/* TITULO */}
            <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  >
            <Grid item xs={1} container justifyContent="center"  >
            <img width={40} heigth={40} src={laboratorio} />
            </Grid>
            <Grid  item xs={3} container justifyContent="start">
            <Typography sx={{fontSize: 40}}  color="text.secondary">
            Equipos
            </Typography>
            </Grid>
            </Grid>

            
            <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }} > 
            <Grid  item xs={6} container justifyContent="center">
            <Typography sx={{fontSize: 14 }}  color="text.secondary">
            Descripcion
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Cantidad
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}} aria-label="simple table"  color="text.secondary">
            Confirmar
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Desechar
            </Typography>
            </Grid>
            </Grid>
            
             <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }} > 
            <Grid  item xs={6} container justifyContent="start" >
            <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="combo-box-demo"
                                    options={equipos}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) =>{
                                      return(
                                       <TextField {...params} 
                                       margin="normal"
                                       
                                       name="descripcion_equipo"
                                       label={"seleccione_Equipos "}
                                       InputLabelProps={{className:"autocompleteLabel"}}
                                       InputProps={{
                                        ...params.InputProps,}}
                                        />
                                      );
                                       }}
                                       />
            </Grid>
          
            <Grid  item xs={2} container justifyContent="center">
            <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="cant_equipos"
                                    options={numeros}
                                    
                                    renderInput={(params) =>{
                                      return(
                                       <TextField {...params} 
                                       margin="normal"
                                       name="cant_equipo"

                                       label={"cant_equipos"}
                                       InputLabelProps={{className:"autocompleteLabel"}}
                                       InputProps={{
                                        ...params.InputProps,}}
                                        />
                                      );
                                       }}
                                       />
           
                                     
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Avatar> 
                                    <AddCircleIcon bgcolor={"secondary"} color={"primary"} />
                                    </Avatar>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Avatar> 
                                    <DeleteForeverIcon color={"rojo"} />
                                    </Avatar> 
            </Grid>
            </Grid>        
       <Grid></Grid>       
       </Grid>    
{/* COMIENZA CONTENEDOR DE MATERIALES */}

<Grid container direction="row"
            justifyContent="space-around"
            alignItems="center"  
            sx={{'--Grid-borderWidth': '1px',borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',paddingX:2,borderRadius:4,paddingY:1,marginBottom:3
            }}
            spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }}> 

            {/* TITULO */}
            <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  >
            <Grid item xs={1} container justifyContent="center"  >
            <img width={40} heigth={40} src={pipeta} />
            </Grid>
            <Grid  item xs={3} container justifyContent="start">
            <Typography sx={{fontSize: 40}}  color="text.secondary">
            Materiales
            </Typography>
            </Grid>
            </Grid>

            
            <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }} > 
            <Grid  item xs={6} container justifyContent="center">
            <Typography sx={{fontSize: 14 }}  color="text.secondary">
            Descripcion
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Cantidad
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}} aria-label="simple table"  color="text.secondary">
            Confirmar
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Desechar
            </Typography>
            </Grid>
            </Grid>
            
             <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }} > 
            <Grid  item xs={6} container justifyContent="start" >
            <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="combo-box-demo"
                                    options={equipos}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) =>{
                                      return(
                                       <TextField {...params} 
                                       margin="normal"
                                       
                                       name="descripcion_materiales"
                                       label={"seleccione_material "}
                                       InputLabelProps={{className:"autocompleteLabel"}}
                                       InputProps={{
                                        ...params.InputProps,}}
                                        />
                                      );
                                       }}
                                       />
            </Grid>
          
            <Grid  item xs={2} container justifyContent="center">
            <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="cant_material"
                                    options={numeros}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) =>{
                                      return(
                                       <TextField {...params} 
                                       margin="normal"
                                       name="cant_material"

                                       label={"cant_material"}
                                       InputLabelProps={{className:"autocompleteLabel"}}
                                       InputProps={{
                                        ...params.InputProps,}}
                                        />
                                      );
                                       }}
                                       />
           
                                     
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Avatar> 
                                    <AddCircleIcon bgcolor={"secondary"} color={"primary"} />
                                    </Avatar>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Avatar> 
                                    <DeleteForeverIcon color={"rojo"} />
                                    </Avatar> 
            </Grid>
            </Grid>        
       <Grid></Grid>       
       </Grid>   


{/* COMIENZA CONTENEDOR DE REACTIVOS */}

<Grid container direction="row"
            justifyContent="space-around"
            alignItems="center"  
            sx={{'--Grid-borderWidth': '1px',borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',paddingX:2,borderRadius:4,paddingY:1,marginBottom:3
            }}
            spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }}> 

            {/* TITULO */}
            <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  >
            <Grid item xs={1} container justifyContent="center"  >
            <img width={40} heigth={40} src={quimica} />
            </Grid>
            <Grid  item xs={3} container justifyContent="start">
            <Typography sx={{fontSize: 40}}  color="text.secondary">
            Reactivos
            </Typography>
            </Grid>
            </Grid>

            
            <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }} > 
            <Grid  item xs={6} container justifyContent="center">
            <Typography sx={{fontSize: 14 }}  color="text.secondary">
            Descripcion
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Cantidad
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}} aria-label="simple table"  color="text.secondary">
            Confirmar
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Desechar
            </Typography>
            </Grid>
            </Grid>
            
             <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }} > 
            <Grid  item xs={6} container justifyContent="start" >
            <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="combo-box-demo"
                                    options={equipos}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) =>{
                                      return(
                                       <TextField {...params} 
                                       margin="normal"
                                       
                                       name="descripcion_reactivo"
                                       label={"seleccione_Equipos "}
                                       InputLabelProps={{className:"autocompleteLabel"}}
                                       InputProps={{
                                        ...params.InputProps,}}
                                        />
                                      );
                                       }}
                                       />
            </Grid>
          
            <Grid  item xs={2} container justifyContent="center">
            <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="cant_reactivo"
                                    options={numeros}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) =>{
                                      return(
                                       <TextField {...params} 
                                       margin="normal"
                                       name="cant_equipo"

                                       label={"cant_equipos"}
                                       InputLabelProps={{className:"autocompleteLabel"}}
                                       InputProps={{
                                        ...params.InputProps,}}
                                        />
                                      );
                                       }}
                                       />
           
                                     
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Avatar> 
                                    <AddCircleIcon bgcolor={"secondary"} color={"primary"} />
                                    </Avatar>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Avatar> 
                                    <DeleteForeverIcon color={"rojo"} />
                                    </Avatar> 
            </Grid>
            </Grid>        
       <Grid></Grid>       
       </Grid>  

         </Box>



           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              INGRESAR
            </Button>
           
          </Box>
       
        
      </Container>
    </ThemeProvider>
  );
}