import React, { useState } from "react";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import SendIcon from '@mui/icons-material/Send';
import TableContainer from '@mui/material/TableContainer';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import moment from 'moment'
import Grid from '@mui/material/Grid';
import laboratorio from '../Image/biologia.png';
import { Autocomplete, TextField, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Theme1 from '../Theme/Theme1';

import { useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import updateReactivo from "../../Services/updateReactivos";

function ModReactivo(
    { setVerEdicion = { setVerEdicion },
        elegido = { elegido },
        setElegido = { setElegido } }) {

    const [nuevaDescripcion, setNuevaDescripcion] = useState("")
    const [nuevoCAS, setNuevoCAS] = useState("")
    const [nuevoStock, setNuevoStock] = useState("")


    const modDescripcion = (event) => {
        if (event.target.value !== null) {
            setNuevaDescripcion(event.target.value);
            console.log("descripcion", event.target.value);
        }
    };
    const modCAS = (event) => {
        if (event.target.value !== null) {
            setNuevoCAS(event.target.value);
        }
    };
    const modStock = (event) => {
        if (event.target.value !== null) {
            setNuevoStock(event.target.value);
        }
    };
    const modifReactivo = () => {

        const dato = {
            "cas": nuevoCAS.toUpperCase(),
            "descripcion": nuevaDescripcion.toUpperCase(),
            "stock": parseInt(nuevoStock),

        }

        updateReactivo(elegido._id, dato)
        setVerEdicion("none")



    };
    useEffect(() => {
        setNuevaDescripcion(elegido.descripcion);
        setNuevoCAS(elegido.cas);
        setNuevoStock(elegido.stock);

    }, [elegido]);



    return (

        <ThemeProvider theme={Theme1}>



            <Grid container direction='row'
                sx={{ marginTop: 1 }} columns={{ xs: 12 }} >

                <Grid container
                    noValidate direction="row"
                    justifyContent="start"
                    alignItems="start"
                    spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >


                    <Grid item xs={4} container justifyContent="start">
                        <Typography sx={{ fontSize: 30 }}
                            color="text.primary"
                        // color="text.secondary"
                        >
                            Edición activada
                        </Typography>
                    </Grid>
                </Grid>


                <Grid container
                    noValidate direction="row"
                    justifyContent="start"
                    alignItems="start" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >

                    <Grid item xs={10} alignItems="center" justifyContent="start">
                        <TextField
                            sx={{ marginTop: 1, marginBottom: 1, marginLeft: 0 }}
                            fullWidth
                            id="descripcion"
                            label="Descripcion"
                            name="descripcion"
                            value={nuevaDescripcion}
                            InputLabelProps={{ shrink: true }}
                            autoComplete="descripcion"
                            autoFocus
                            onChange={modDescripcion}
                        />

                    </Grid>

                    <Grid container
                        noValidate direction="row"
                        justifyContent="start"
                        alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >

                        <Grid item xs={8} container justifyContent="center" marginTop={1} marginLeft={1}>

                            <TextField
                                sx={{ marginTop: 1, marginBottom: 1, marginLeft: 0 }}
                                fullWidth
                                id="cas"
                                label="CAS"
                                name="cas"
                                value={nuevoCAS}
                                InputLabelProps={{ shrink: true }}
                                // autoComplete="descripcion"
                                autoFocus
                                onChange={modCAS}
                            />



                        </Grid>

                        <Grid item xs={3} container justifyContent="center" >

                            <TextField
                                sx={{ marginTop: 1 }}

                                id="stock"
                                variant="outlined"
                                name="stock"
                                label="stock"
                                type="number"
                                value={nuevoStock}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    inputProps: {
                                        max: 100, min: 0
                                    }
                                }}
                                onChange={modStock}

                            />
                        </Grid>
                    </Grid>

                </Grid>


                <Grid container direction="row"
                    justifyContent="end"
                    columns={{ xs: 12 }}    >

                    <Grid item xs={2}
                        height={30}
                        bgcolor={"error"}
                        borderRadius={2}
                        sx={{ mt: 3, mb: 2 }}

                    >
                        <Button fullWidth


                            margin="normal"
                            variant="contained"
                            color="error"
                            startIcon={<ReplyAllIcon />}
                            onClick={() => {
                                setVerEdicion("none");
                            }}
                            style={{ borderRadius: 8 }}
                            styled={{ textTransform: 'none' }}
                            sx={{ height: 50 }}
                        >  CANCELAR</Button>

                    </Grid>

                    <Grid item xs={2} height={30}
                        bgcolor={"primary.main"} borderRadius={2}
                        sx={{ mt: 3, mb: 2, marginLeft: 2 }}
                    >

                        <Button
                            fullWidth
                            style={{ height: 50, borderRadius: 8 }}
                            margin="normal"
                            variant="contained"
                            endIcon={<SendIcon />}
                            color="primary"
                            borderRadius={4}
                            onClick={modifReactivo}

                        >
                            Modificar</Button>

                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>





            </Grid>





            {/* </DialogContent>
            </Dialog> */}



        </ThemeProvider >


    );

}

export default ModReactivo;