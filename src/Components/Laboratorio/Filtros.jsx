
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Button, Grid, Box, Alert } from '@mui/material';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DateRangeIcon from '@mui/icons-material/DateRange';

import moment from 'moment'



export default function Filtros(props) {



    const guardar_inicio = (event) => {


        cambiarFechaInicio(event.target.value)

    }

    const cambiarFechaInicio = (event) => { props.set_fecha_inicio(event) }
    const cambiarFechaFin = (event) => { props.set_fecha_fin(event.target.value) }

    const edificio_elegido = (event) => { props.set_edificio(event.target.value) }


    React.useEffect(() => {


        return () => {

        }
    }, [props.fecha_inicio])


    return (

        <Box sx={{ flexGrow: 1, mb: 10 }}

        >
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                scroll={props.scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth='xl'
                fullWidth
                sx={{ height: 400 }}
            >

                <DialogContent
                    dividers={props.scroll === 'paper'
                    }
                >
                    <Grid container component="form" onSubmit={props.cargaEncabezado} noValidate direction="row"
                        justifyContent="center"
                        alignItems="center"

                        sx={{
                            '--Grid-borderWidth': '1px', borderTop: 'var(--Grid-borderWidth) solid',
                            borderLeft: 'var(--Grid-borderWidth) solid',
                            borderRight: 'var(--Grid-borderWidth) solid',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',
                            borderRadius: 2,
                           
                        }}
                        spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }}>

                        {/* <Grid item xs={2} container justifyContent="center" marginTop={2} spacing={{ xs: 2, md: 2 }} marginBottom={2}> */}
                        <Grid item xs={2} container  >

                            <FormControl fullWidth  >

                                <InputLabel id="edificio">EDIFICIO</InputLabel>
                                <Select
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    labelId="edificio"
                                    id="edificio"
                                    value={props.edificio}
                                    label="edificio"
                                    onChange={edificio_elegido}

                                // name='edificio'
                                >
                                    <MenuItem sx={{ width: 100, fontSize: 14 }} value={""}>TODOS</MenuItem>
                                    <MenuItem sx={{ width: 100, fontSize: 14 }} value={"Malvinas"}>MALVINAS</MenuItem>
                                    <MenuItem sx={{ width: 100, fontSize: 14 }} value={"Origone-A"}>ORIGONE - A</MenuItem>
                                    <MenuItem sx={{ width: 100, fontSize: 14 }} value={"Origone-B"}>ORIGONE - B</MenuItem>

                                </Select>

                            </FormControl>

                        </Grid>



                        <Grid item xs={2} container  >
                            <FormControl fullWidth>
                                <InputLabel id="estado" >ESTADO</InputLabel>
                                <Select

                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    labelId="estado"
                                    id="estado"
                                    value={props.tipo_pedido}
                                    label="estado"
                                    onChange={props.cargarEstado}
                                    defaultValue={""}


                                >

                                    <MenuItem sx={{ width: 100, fontSize: 14 }} value={""}> TODOS </MenuItem>
                                    <MenuItem sx={{ width: 100, fontSize: 14 }} value={"ACEPTADO"}> ACEPTADO </MenuItem>
                                    <MenuItem sx={{ width: 100, fontSize: 14 }} value={"PENDIENTE"}>PENDIENTE</MenuItem>
                                    <MenuItem sx={{ width: 100, fontSize: 14 }} value={"RECHAZADO"}>RECHAZADO</MenuItem>



                                </Select>
                            </FormControl>
                        </Grid>




                        <Grid item xs={2} display="flex" justifyContent={"center"} alignContent={"top"}
                            sx={{ border: 1, borderColor: 'gris.claro', borderRadius: 1, minHeigth: 70, marginX: 1, marginTop: 1 }}>

                            <Typography sx={{
                                fontSize: 14
                            }}
                                aria-label="simple table"
                                color="text.secondary"  >
                                <legend>Inicio de busqueda </legend>
                                <input
                                    type="date"
                                    fullWidth
                                    style={{

                                        fontSize: '1.0rem', padding: "1.0 rem", width: "80%", border: "none"
                                        , fontFamily: "cursive", color: "grey"
                                    }}
                                    value={props.fecha_inicio}
                                    onChange={guardar_inicio}
                                    id="fecha_inicio"
                                    //
                                    name="fecha_inicio" />

                            </Typography>


                        </Grid>

                        <Grid item xs={2} display="flex" justifyContent={"center"} alignContent={"top"}
                            sx={{ border: 1, borderColor: 'gris.claro', borderRadius: 1, minHeigth: 70, marginX: 1, marginTop: 1 }}>
                            <Typography sx={{ fontSize: 14 }} aria-label="simple table" color="text.secondary" >
                                <legend>Fin de busqueda</legend>
                                <input
                                    type="date"
                                    style={{
                                        border: "none", padding: "1.0 rem", width: "80%",
                                        fontSize: '1.0rem', fontFamily: "cursive", color: "grey"
                                    }}

                                    min={props.fecha_inicio}
                                    id="fecha_fin"
                                    name="fecha_fin"
                                    value={props.fecha_fin}
                                    onChange={cambiarFechaFin}
                                />


                            </Typography>
                        </Grid>

                        <Grid item xs={2}
                            sx={{

                                marginX: 1, marginY: 1
                            }}
                        

                        >
                           
                            <Button
                                fullWidth
                                style={{
                                    fontSize: '0.7rem', height: 55, borderRadius: 2

                                }}

                                variant="outlined"

                                color="error"
                                endIcon={<DateRangeIcon />}

                                onClick={() => {
                                    props.set_fecha_inicio("")
                                    props.set_fecha_fin("")
                                }}>

                                eliminar filtros fecha</Button>
                           


                        </Grid>

                    </Grid>
                </DialogContent>
            </Dialog>
        </Box>


    );
}