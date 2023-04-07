import React from "react";
import {  makeStyles, Button } from "@material-ui/core";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import DialogActions from '@mui/material/DialogActions';
import { useState } from "react";
import TableContainer from '@mui/material/TableContainer';

import Paper from '@mui/material/Paper';
import moment from 'moment'
import Grid from '@mui/material/Grid';


import AsignarLaboratorio from "./AsignarLaboratorio";
const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: "8px",
            height: "240px"
        },
    },
}));

function PedidoDetalle(
    { open = { open },
        setOpen = { setOpen },
        scroll = { scroll },
        handleClose = { handleClose },
        pedido = { pedido },
        setEdicionActiva={setEdicionActiva},
        edicionActiva={edicionActiva}
    }
) {
    const { root } = useStyles();
    
    const {
        numero_tp,
        fecha_solicitud,
        fecha_utilizacion,
        numero_laboratorio,
        docente,
        cantidad_grupos,
        lista_equipos,
        lista_materiales,
        lista_reactivos,
        descripcion
    } = pedido;

    const fechaActual = (moment(fecha_solicitud).format('DD/MM/YYYY'));
    const fechaActual2 = (moment(fecha_utilizacion).format('DD/MM/YYYY'));
    const descriptionElementRef = React.useRef(null);
  



    
    const irAAsignarLaboratorio = () => {
      
        setEdicionActiva(true)
        

    }

    

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="lg"
            >
                <DialogTitle id="scroll-dialog-title">Pedido n°: {descripcion}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >

                        <div>
                            <fieldset>
                                <label htmlFor="fecha_trabajo" id="label_fecha_trabajo">Fecha solicitud : </label> <input type="text" id="fecha_trabajo" name="fecha_trabajo" value={fechaActual} disabled />
                                <label htmlFor="edificio" id="label_edificio">Fecha Utilización : </label> <input type="text" id="edificio" name="edificio" value={fechaActual2} disabled />
                                <label htmlFor="laboratorio" id="label_laboratorio">Laboratorio : </label> <input type="text" id="laboratorio" name="laboratorio" value={numero_laboratorio} disabled />

                                <br></br>
                                <label id="label_docente"> docente : </label> <input type="text" id="docente" name="docente" value={`${docente.nombre}  ${docente.apellido}`} disabled />
                                {/* <label id="label_alumno"> alumnos : </label> <input type="text" id="alumno" name="alumno" value="40" disabled /> */}
                                <label id="label_grupo"> grupos : </label> <input type="text" id="grupo" name="grupo" value={cantidad_grupos} disabled />
                            </fieldset>
                        </div>
                        <hr></hr>
                        <h4>Equipos</h4>
                        {/* LISTA EQUIPOS */}
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">


                                <Grid container direction="row" justifyContent="start"
                                    alignItems="center" spacing={{ xs: 2, md: 2 }} columns={{ xs: 12 }} >
                                    <Grid item xs={6} container justifyContent="flex-start" >
                                        Descripcion
                                    </Grid>
                                    <Grid item xs={2} container justifyContent="flex-start" >
                                        Tipo
                                    </Grid>
                                    <Grid item xs={3} container justifyContent="flex-end" >
                                        Cantidad
                                    </Grid>
                                </Grid>


                                {(lista_equipos.length > 0)
                                    ?
                                    (<div>{
                                        lista_equipos.map((row) => (

                                            //key={row._id}
                                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                            <Grid container direction="row"
                                                alignItems="center" spacing={{ xs: 2, md: 2 }} columns={{ xs: 12 }} >

                                                <Grid item xs={6} container justifyContent="start" >

                                                    {row.equipo.descripcion}
                                                </Grid>
                                                <Grid item xs={2} container justifyContent="flex-start" >
                                                    {row.equipo.clase}
                                                </Grid>
                                                <Grid item xs={3} container justifyContent="end" >

                                                    {row.cantidad}
                                                </Grid>
                                            </Grid>

                                        ))}
                                    </div>
                                    ) : (<div></div>)}


                            </Table>
                        </TableContainer>

                        {/* LISTA MATERIALES */}
                        <h4>Materiales</h4>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <Grid container direction="row" justifyContent="Start"
                                    alignItems="center" spacing={{ xs: 2, md: 2 }} columns={{ xs: 12 }} >

                                    <Grid item xs={6} container justifyContent="flex-start" >
                                        Descripcion
                                    </Grid>
                                    <Grid item xs={5} container justifyContent="flex-end" >
                                        Cantidad
                                    </Grid>
                                </Grid>
                                <TableBody>{(lista_materiales.length) > 0
                                    ?
                                    (<div>
                                        {lista_materiales.map((row) => (

                                            <Grid container direction="row" alignItems="center" spacing={{ xs: 2, md: 2 }} columns={{ xs: 12 }} >
                                                <Grid item xs={6} container justifyContent="start" >
                                                    {row.material.descripcion}
                                                </Grid>
                                                <Grid item xs={5} container justifyContent="flex-end" >
                                                    {row.cantidad}
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </div>)
                                    : (<div></div>)}

                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* LISTA REACTIVOS */}

                        <h4>Reactivos</h4>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <Grid container direction="row" justifyContent="flex-start"
                                    alignItems="center" marginBottom={1} spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >

                                    <Grid item xs={2} container justifyContent="center" >

                                        Descripcion
                                    </Grid>
                                    <Grid item xs={2} container justifyContent="center" >
                                        Cas
                                    </Grid>
                                    <Grid item xs={2} container justifyContent="center" >
                                        Calidad
                                    </Grid>
                                    <Grid item xs={2} container justifyContent="center" >
                                        Concentracion
                                    </Grid>
                                    <Grid item xs={2} container justifyContent="center" >
                                        Disolvente
                                    </Grid>
                                    <Grid item xs={1} container justifyContent="center" >
                                        Cant Total
                                    </Grid>
                                    <Grid item xs={1} container justifyContent="center" >
                                        U. Med
                                    </Grid>
                                </Grid>


                                {(lista_reactivos.length) > 0
                                    ?
                                    (<div>
                                        {lista_reactivos.map((row) => (

                                            <Grid container direction="row" justifyContent="start"
                                                alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >
                                                <Grid item xs={2} container justifyContent="center" >

                                                    {row.reactivo.descripcion}

                                                </Grid>
                                                <Grid item xs={2} container justifyContent="center" >
                                                    {row.reactivo.cas}
                                                </Grid>
                                                <Grid item xs={2} container justifyContent="center" >
                                                    {row.reactivo.calidad}
                                                </Grid>
                                                <Grid item xs={2} container justifyContent="center" >
                                                    {row.reactivo.concentracion_tipo}
                                                </Grid>
                                                <Grid item xs={2} container justifyContent="center" >
                                                    {row.reactivo.disolvente}
                                                </Grid>
                                                <Grid item xs={1} container justifyContent="center" >
                                                    {row.cantidad}
                                                </Grid>
                                                <Grid item xs={1} container justifyContent="center" alignItems="center">
                                                    {row.reactivo.concentracion_medida}
                                                </Grid>
                                            </Grid>


                                        ))}
                                    </div>)
                                    : (<div></div>)}

                            </Table>
                        </TableContainer>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={irAAsignarLaboratorio}
                     style={{ borderRadius: 8 }}
                     variant="contained"
                    bgcolor={"secondary"} color={"primary"}>
                        Asignar Edificio y Laboratorio


                    </Button>
           
                </DialogActions>
            </Dialog>
         
           

        </div>
    );

}

export default PedidoDetalle;