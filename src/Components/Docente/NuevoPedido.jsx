
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
import { margin } from '@mui/system';

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
            
           
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow alignItems="center">
                            <TableCell>Descripcion</TableCell>
                            <TableCell align="center">Tipo</TableCell>
                            <TableCell align="center">Cantidad</TableCell>
                            <TableCell align="center">confirmar</TableCell>
                            <TableCell align="center">desechar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       
                            <TableRow
                                
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell >
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
                                     </TableCell>
                                <TableCell align="right">
                                <TextField
                                      margin="normal"
                                      required
                                      fullWidth
                                      id="cantidad_grupos"
                                      label="cantidad_grupos"
                                      name="cantidad_grupos"
                                      autoComplete="cantidad_grupos"
                                      autoFocus
                                    /></TableCell>
                                <TableCell align="right">
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
                                </TableCell>
                                <TableCell align="right">
                                  
                                <Avatar> 
                                <AddCircleIcon />
                                </Avatar>

                                </TableCell>
                                <TableCell align="right">
                                <Avatar> 
                                <AddCircleIcon />
                                </Avatar> 
                                </TableCell>
                            </TableRow>
                       
                    </TableBody>
                </Table>
            </TableContainer>


            
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow alignItems="center">
                            <TableCell>Descripcion</TableCell>
                            <TableCell align="center">Tipo</TableCell>
                            <TableCell align="center">Cantidad</TableCell>
                            <TableCell align="center">confirmar</TableCell>
                            <TableCell align="center">desechar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       
                            <TableRow
                                
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell >
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
                                     </TableCell>
                                <TableCell align="right">
                                <TextField
                                      margin="normal"
                                      required
                                      fullWidth
                                      id="cantidad_grupos"
                                      label="cantidad_grupos"
                                      name="cantidad_grupos"
                                      autoComplete="cantidad_grupos"
                                      autoFocus
                                    /></TableCell>
                                <TableCell align="right">
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
                                </TableCell>
                                <TableCell align="right">
                                  
                                <Avatar> 
                                <AddCircleIcon />
                                </Avatar>

                                </TableCell>
                                <TableCell align="right">
                                <Avatar> 
                                <AddCircleIcon />
                                </Avatar> 
                                </TableCell>
                            </TableRow>
                       
                    </TableBody>
                </Table>
            </TableContainer>  
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow alignItems="center">
                            <TableCell>Descripcion</TableCell>
                            <TableCell align="center">Tipo</TableCell>
                            <TableCell align="center">Cantidad</TableCell>
                            <TableCell align="center">confirmar</TableCell>
                            <TableCell align="center">desechar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       
                            <TableRow
                                
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell >
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
                                     </TableCell>
                                <TableCell align="right">
                                <TextField
                                      margin="normal"
                                      required
                                      fullWidth
                                      id="cantidad_grupos"
                                      label="cantidad_grupos"
                                      name="cantidad_grupos"
                                      autoComplete="cantidad_grupos"
                                      autoFocus
                                    /></TableCell>
                                <TableCell align="right">
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
                                </TableCell>
                                <TableCell align="right">
                                  
                                <Avatar> 
                                <AddCircleIcon />
                                </Avatar>

                                </TableCell>
                                <TableCell align="right">
                                <Avatar> 
                                <AddCircleIcon />
                                </Avatar> 
                                </TableCell>
                            </TableRow>
                       
                    </TableBody>
                </Table>
            </TableContainer>          

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