
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

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import Header from '../Header/Header'

import Theme1 from '../Theme/Theme1';



//const theme = createTheme();

export default function NuevoPedido() {
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
 
  const handleSubmit = (event) => {
    event.preventDefault();
    

    const data = new FormData(event.currentTarget);

    // console.log({
    //   usuario: data.get('user'),
    //   password: data.get('password'),
    // });
    // setPantalla(data.get('user').toLowerCase());

  };

  return (
    <ThemeProvider theme={Theme1}>
       <Box sx={{ flexGrow: 1 ,m:2}}>
          
          <Header texto={texto} ></Header>

       </Box>
      <Container component="main"  color="primary">
        
        
          
          <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box sx={{ flexGrow: 1 ,md:2 }}>    
           
     
          <Grid container direction="row"
            justifyContent="space-around"
            alignItems="center"  
          
            
          
            sx={{'--Grid-borderWidth': '1px',borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',paddingX:2,borderRadius:4,paddingY:1
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
                id="user"
                label="Usuario"
                name="user"
                autoComplete="user"
                autoFocus
              />
            </Grid>
            </Grid>
         </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              INGRESAR
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  olvidaste tu password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
       
        
      </Container>
    </ThemeProvider>
  );
}