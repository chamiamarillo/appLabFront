import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import { Grid, Box } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';

import Header from '../Header/Header'

import Theme1 from '../Theme/Theme1';


import pipeta from '../Image/pipeta.png'
import quimica from '../Image/quimica.png'
import Autocomplete from '@mui/material/Autocomplete';



import { useNavigate } from 'react-router-dom';
import { postPedido } from '../../Services/postPedidoService'
import { getListaMateriales, getListaEquipos, getListaReactivos } from '../../Services/getService';

import { getCantidadPedidos } from '../../Services/getPedidosService';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import SendIcon from '@mui/icons-material/Send';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

import PedidoEquipos from './PedidoEquipos';

import PedidoCabecera from './PedidoCabecera';

import PedidoReactivo from './PedidoReactivo';


//const theme = createTheme();



export default function NuevoPedido() {
  //PRUEBA CODIGO

  const userActual = JSON.parse(localStorage.getItem('usuario'));
  const [pedidoEquipos, setPedidoEquipos] = useState([]);
  const [listaEquipos, setListaEquipos] = useState([]);
  const [equipoElegido, setEquipoElegido] = useState({});
  const [verMasEquip,setverMasEquip]=useState([]);
 

  const [cantidadPedidos, setCantPedido] = useState([]);
  const [pedidoEncabezado, setEncabezadoPedido] = useState({});
  //const [fechaActual,setFechaActual]=useState(new Date());

  const [pedidoMateriales, setPedidoMateriales] = useState([]);
  const [listaMateriales, setListaMateriales] = useState([]);
  const [materialElegido, setMatElegido] = useState({});

  const [pedidoReactivos, setPedidoReactivos] = useState([]);
  const [listaReactivos, setListaReactivos] = useState([]);
  const [reactivoElegido, setReacElegido] = useState({});

  const [_med_reactivo, setUn_med_reactivo] = useState("");

  const [cal_reactivo, setCalReactivo] = useState("");
  const [_tip_reactivo, setTipReactivo] = useState("");
  const [_disol_reactivo, setDisolReactivo] = useState("");




 
  



  const disolReactivo = (event) => { setDisolReactivo(event.target.value); };

  const tipReactivo = (event) => { setTipReactivo(event.target.value); };


  const calReactivo = (event) => { setCalReactivo(event.target.value); };


  const med_reactivo = (event) => { setUn_med_reactivo(event.target.value); };

  const navigate = useNavigate();



  const [texto, setEncabezado] = useState("CARGA DE PEDIDO");


  //CARGA ENCABEZADO AL PEDIDO
  const cargaEncabezado = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const nro_pedido = cantidadPedidos + 1;

    setEncabezadoPedido({

      "descripcion": (nro_pedido).toString(),
      "fecha_solicitud": data.get('fecha_solicitud'),
      "fecha_utilizacion": data.get('fecha_utilizacion'),
      "numero_laboratorio": parseInt(10, 10),
      "tipo_pedido": "algo",
      "cantidad_alumnos": data.get('cantidad_alumnos'),
      "cantidad_grupos": data.get('cantidad_grupos'),
      "observaciones": "string",
      "materia": "string",
      "numero_tp": "2"

    });


    // console.log(pedidoEncabezado);
  };




  //CARGA EQUIPO A LA LISTA
  const cargaEquipo = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dato={
      "cantidad": parseInt(data.get('cant_equipo'), 10),
      "equipo": equipoElegido._id
    }; 
    const cargarNuevosEquipos = dato => {
         setPedidoEquipos([...pedidoEquipos, dato]);
       }
    const datoVer={
        "cantidad": parseInt(data.get('cant_equipo'), 10),
        "equipo": equipoElegido
      }; 
      const cargarNuevosEquiposVer = dato => {
        setverMasEquip([...verMasEquip, dato]);
         }
        
  cargarNuevosEquiposVer(datoVer)

  cargarNuevosEquipos(dato)

    // setPedidoEquipos({
    //   "cantidad": parseInt(data.get('cant_equipo'), 10),
    //   "equipo": equipoElegido._id
    // });

  };

  const set_IdEquip = (event, value) => { setEquipoElegido(value); };




  // CARGA MATERIAL A LA LISTA
  const cargaMaterial = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dato={
        "cantidad": parseInt(data.get('cant_material'), 10),
        "material": materialElegido._id
      }; 
      const cargarNuevosMateriales = dato => {
           setPedidoMateriales([...pedidoMateriales, dato]);
         }
    cargarNuevosMateriales(dato)

    

  };

  const set_IdMat = (event, value) => { setMatElegido(value); };


  // CARGA REACTIVOS A LA LISTA
  const cargaReactivos = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log("reactivo",reactivoElegido._id);


    setPedidoReactivos({
      "cantidad": parseInt(data.get('cant_reactivo'), 10),
      "reactivo": reactivoElegido._id
      //   ejemplo para mas adelante
    });

  };
  const set_IdReactivo = (event, value) => { setReacElegido(value); console.log("hand", reactivoElegido) };
  





  const handleSubmit = () => {

    const pedido = {
      "docente": {
        "nombre": userActual.nombre,
        "apellido": userActual.apellido,
        "dni": userActual.dni,
        "matricula": userActual.matricula
      },
      "descripcion": pedidoEncabezado.descripcion,
      "fecha_solicitud": pedidoEncabezado.fecha_solicitud,
      "fecha_utilizacion": pedidoEncabezado.fecha_utilizacion,
      "numero_laboratorio": pedidoEncabezado.numero_laboratorio,
      "tipo_pedido": pedidoEncabezado.tipo_pedido,
      "cantidad_grupos": pedidoEncabezado.cantidad_grupos,
      "observaciones": pedidoEncabezado.observaciones,
      "materia": pedidoEncabezado.materia,
      "numero_tp": pedidoEncabezado.numero_tp,
      "lista_equipos": pedidoEquipos,
      "lista_reactivos": pedidoReactivos,
      "lista_materiales": pedidoMateriales

    };

    postPedido(pedido);
    navigate('/Docente/Pedidos');
   





  };
  useEffect(() => {
    let mounted = true;
    getListaEquipos().then(items => { if (mounted) { setListaEquipos(items) } });
    getListaMateriales().then(items => { if (mounted) { setListaMateriales(items) } });
    getListaReactivos().then(items => { if (mounted) { setListaReactivos(items) } });
    getCantidadPedidos().then(items => { if (mounted) { setCantPedido(items) } });
    // setFechaActual(new Date()); 
    return () => mounted = false;
  }, [])

  return (
    <ThemeProvider theme={Theme1}>
      <Box sx={{ flexGrow: 1, m: 2 }}>

        <Header texto={texto} ></Header>

      </Box>
      {/* COMIENZA EL CONTENEDOR DE LA PAGINA    */}
      <Container component="main" color="primary">

        {/* COMIENZA EL CONTENEDOR DEL BLOQUE SUPERIOR    */}
        {/* <Box component="form" onSubmit={handleSubmit} noValidate>      */}
        <Box>
          <Box sx={{ flexGrow: 1, md: 2 }}>

             <PedidoCabecera
            cargaEncabezado={cargaEncabezado}
            cantidadPedidos={cantidadPedidos}
            
            />
           

            {/* COMIENZA CONTENEDOR DE EQUIPOS */}
           



            <PedidoEquipos

              cargaEquipo={cargaEquipo}
              listaEquipos={listaEquipos}
              set_IdEquip={set_IdEquip}
              pedidoEquipos={pedidoEquipos}
              equipoElegido={equipoElegido}
              verMasEquip={verMasEquip}

            />


           
            {/* COMIENZA CONTENEDOR DE MATERIALES */}

            <Grid container direction="row"
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

              {/* TITULO */}
              <Grid container direction="row"
                justifyContent="start"
                alignItems="center"  >
                <Grid item xs={1} container justifyContent="center"  >
                  <img width={40} alt="" heigth={40} src={pipeta} />
                </Grid>
                <Grid item xs={3} container justifyContent="start">
                  <Typography sx={{ fontSize: 40 }} color="text.secondary">
                    Materiales
                  </Typography>
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
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Desechar
                  </Typography>
                </Grid>
              </Grid>
              {/* COMIENZA EL FORMULARIO DE MATERIALES */}
              <Grid container component="form" onSubmit={cargaMaterial} noValidate direction="row"
                justifyContent="start"
                alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >
                <Grid item xs={5} container justifyContent="start" >
                  <Autocomplete
                    disablePortal
                    fullWidth
                    id="combo-box-demo"
                    options={listaMateriales}
                    getOptionLabel={(option) => option.descripcion}
                    onChange={(event, value) => set_IdMat(event, value)}
                    renderInput={(params) => {
                      return (
                        <TextField {...params}
                          margin="normal"

                          name="descripcion_material"
                          label={"descripcion_material"}
                          InputLabelProps={{ className: "autocompleteLabel", shrink: true, }}
                          InputProps={{
                            ...params.InputProps,
                          }}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={1} container justifyContent="center" />
                <Grid item xs={2} container justifyContent="center">
                  <TextField
                    sx={{ marginTop: 1 }}

                    id="cant_material"
                    variant="outlined"
                    name="cant_material"
                    label="cant_material"
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
                <Grid item xs={2} container justifyContent="center" />
                <Grid item xs={1} container justifyContent="center">
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
            <Grid  item xs={1} container justifyContent="center">
            <Avatar> 
                                    <DeleteForeverIcon color={"rojo"} />
                                    </Avatar> 
                </Grid>
              </Grid>
              <Grid></Grid>
            </Grid>

            <PedidoReactivo
              cargaReactivos = {cargaReactivos}
              listaReactivos = {listaReactivos}
              set_IdReactivo = {set_IdReactivo}
              reactivoElegido = {reactivoElegido}
              cal_reactivo = {cal_reactivo}
              calReactivo = {calReactivo}
              _disol_reactivo = {_disol_reactivo}
              disolReactivo = {disolReactivo}
              _med_reactivo = {_med_reactivo}
              med_reactivo = {med_reactivo}

            />

          </Box>
          {/* EMPIEZAN BOTONES */}
          <Grid container justifyContent="flex-end" spacing={2}
          >
            <Grid item xs={2} >

              <Button fullWidth
                color="error"
                style={{ borderRadius: 8 }}
                margin="normal"
                variant="contained"
                startIcon={<ReplyAllIcon />}
                onClick={() => {
                  navigate('/Docente/Pedidos')
               

                }}



                sx={{ mt: 3, mb: 2, height: 50 }}>  CANCELAR</Button>

            </Grid>
            <Grid item xs={2} >

              <Button fullWidth
                style={{ borderRadius: 8 }}
                margin="normal"
                variant="contained"
                endIcon={<SendIcon />}

                onClick={handleSubmit}


                sx={{ mt: 3, mb: 2, height: 50 }}> CONFIRMAR PEDIDO</Button>

            </Grid>
          </Grid>





        </Box>


      </Container>
    </ThemeProvider>
  );
}