
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

import Theme1 from '../Theme/Theme1';

import laboratorio from '../Image/biologia.png'
import pipeta from '../Image/pipeta.png'
import quimica from '../Image/quimica.png'
import Autocomplete from '@mui/material/Autocomplete';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InputLabel from '@mui/material/InputLabel';
import { height } from '@mui/system';
import { useNavigate } from 'react-router-dom';





//const theme = createTheme();



export default function NuevoPedido({setNuevoPedido}) {
//PRUEBA CODIGO
  const [cantEquipo, setCantEquipo] = React.useState('');
  const navigate=useNavigate();

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
const reactivos=[{label:"Alcohol etílico (96° uso medicinal)" ,cas:""},{label:"Acido cítrico anhidro p.a." ,cas:"77-92-9"},{label:"Ácido Fluorhídrico 40% p.a." ,cas:"7664-39-3"},{label:"Acido nítrico 70% p.a." ,cas:"7697-37-2"},{label:"Ácido Oxálico p.a." ,cas:"6153-56-6"},{label:"Almidón soluble" ,cas:"9005-84-9"},{label:"Azul de metileno p.a." ,cas:"122965-43-9"},{label:"Buffer pH 4,01" ,cas:"s/n"},{label:"Buffer pH 7,00" ,cas:"s/n"},{label:"Buffer pH 10,01" ,cas:"s/n"},{label:"Buffer pH 10,00" ,cas:"s/n"},{label:"Calcio carbonato p.a" ,cas:"471-34-1"},{label:"Clorato de potasio" ,cas:"3811-04-09"},
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
             <Grid item xs={1}>
                <TextField
                    margin="normal"
                    // required
                    fullWidth
                    id="n_pedido"
                    label="n_pedido"
                    name="n_pedido"
                    value={unpedido.numero_tp}
                    autoComplete={"n_pedido"}
                    autoFocus
                  />
                 
              </Grid> 
              <Grid item xs={2}>
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
            <Grid item xs={2}>
           
                <Button fullWidth
                margin="normal"
              variant="contained"
              onClick={() => {
          navigate('/Docente/Pedidos')
          setNuevoPedido(false);
          
        }}
              
              
              sx={{ mt: 3, mb: 2 ,height:50}}>Cargar pedido</Button>
              
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
            <img width={40} alt="" heigth={40} src={laboratorio} />
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
            <Grid  item xs={5} container justifyContent="center">
            <Typography sx={{fontSize: 14 }}  color="text.secondary">
            Descripcion
            </Typography>
            </Grid>
            <Grid  item xs={1} container justifyContent="center"/>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Cantidad
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center"/>
            <Grid  item xs={1} container justifyContent="center">
            <Typography sx={{fontSize: 14}} aria-label="simple table"  color="text.secondary">
            Confirmar
            </Typography>
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Desechar
            </Typography>
            </Grid>
            </Grid>
            
             <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }} > 
            <Grid  item xs={5} container justifyContent="start" >
            <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="combo-box-demo"
                                    options={equipos}
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
            <Grid  item xs={1} container justifyContent="center"/>
          
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
            <Grid  item xs={2} container justifyContent="center"/>
            <Grid  item xs={1} container justifyContent="center">
            <Avatar> 
                                    <AddCircleIcon bgcolor={"secondary"} color={"primary"} />
                                    </Avatar>
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
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
            <img width={40} alt="" heigth={40} src={pipeta} />
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
            <Grid  item xs={5} container justifyContent="center">
            <Typography sx={{fontSize: 14 }}  color="text.secondary">
            Descripcion
            </Typography>
            </Grid>
            <Grid  item xs={1} container justifyContent="center"/>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Cantidad
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center"/>
            <Grid  item xs={1} container justifyContent="center">
            <Typography sx={{fontSize: 14}} aria-label="simple table"  color="text.secondary">
            Confirmar
            </Typography>
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Desechar
            </Typography>
            </Grid>
            </Grid>
            
             <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }} > 
            <Grid  item xs={5} container justifyContent="start" >
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
            <Grid  item xs={1} container justifyContent="center"/>
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
            <Grid  item xs={2} container justifyContent="center"/>
            <Grid  item xs={1} container justifyContent="center">
            <Avatar> 
                                    <AddCircleIcon bgcolor={"secondary"} color={"primary"} />
                                    </Avatar>
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
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
            <img width={40} alt="" heigth={40} src={quimica} />
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
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14 }}  color="text.secondary">
            Descripcion
            </Typography>
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            CAS
            </Typography>
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Calidad
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Concentración
            </Typography>
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Disolvente
            </Typography>
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            cant_grupo
            </Typography>
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Un_Med
            </Typography>
            </Grid>
            
            <Grid  item xs={1} container justifyContent="center">
            <Typography sx={{fontSize: 14}} aria-label="simple table"  color="text.secondary">
            Confirmar
            </Typography>
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
            <Typography sx={{fontSize: 14}}  color="text.secondary">
            Desechar
            </Typography>
            </Grid>
            </Grid>
            
             <Grid container direction="row"
            justifyContent="start"
            alignItems="center"  spacing={{ xs: 1, md: 1 }} columns={{ xs: 12  }} > 
            <Grid  item xs={2} container justifyContent="start" >
            <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="combo-box-demo"
                                    options={reactivos}
                                    renderInput={(params) =>{
                                      return(
                                       <TextField {...params} 
                                       margin="normal"
                                       
                                       name="descripcion_reactivo"
                                       label={"seleccione_reactivo "}
                                       InputLabelProps={{className:"autocompleteLabel"}}
                                       InputProps={{
                                        ...params.InputProps,}}
                                        />
                                      );
                                       }}
                                       />
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="cas"
                    label="cas"
                    name="user"
                    autoComplete="user"
                    autoFocus
                  />
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="calidad_reactivo"
                    label="Calidad_reactivo"
                    name="calidad_reactivo"
                    autoComplete="calidad_reactivo"
                    autoFocus
                  />
              
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="tipo_reactivo"
                    label="tipo_reactivo"
                    name="tipo_reactivo"
                    autoComplete="tipo_reactivo"
                    autoFocus
                  />
              
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="medida_reactivo"
                    label="medida_reactivo"
                    name="medida_reactivo"
                    autoComplete="medida_reactivo"
                    autoFocus
                  />
              
            </Grid>
            <Grid  item xs={2} container justifyContent="center">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="disolvente_reactivo"
                    label="disolvente_reactivo"
                    name="disolvente_reactivo"
                    autoComplete="disolvente_reactivo"
                    autoFocus
                  />
              
            </Grid>
          
            <Grid  item xs={1} container justifyContent="center">
            <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="cant_reactivo"
                                    options={numeros}
                                  
                                    renderInput={(params) =>{
                                      return(
                                       <TextField {...params} 
                                       margin="normal"
                                       name="cant_reactivo"

                                       label={"cant_reactivo"}
                                       InputLabelProps={{className:"autocompleteLabel"}}
                                       InputProps={{
                                        ...params.InputProps,}}
                                        />
                                      );
                                       }}
                                       />
           
                                     
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="un_med_reactivo"
                    label="un_med_reactivo"
                    name="un_med_reactivo"
                    autoComplete="un_med_reactivo"
                    autoFocus
                  />
              
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
            <Avatar> 
                                    <AddCircleIcon bgcolor={"secondary"} color={"primary"} />
                                    </Avatar>
            </Grid>
            <Grid  item xs={1} container justifyContent="center">
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