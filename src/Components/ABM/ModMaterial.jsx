import React, { useState } from "react";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import SendIcon from '@mui/icons-material/Send';
// import TableContainer from '@mui/material/TableContainer';

import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import moment from 'moment'
import Grid from '@mui/material/Grid';
// import pipeta from '../Image/pipeta.png';

import { TextField, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Theme1 from '../Theme/Theme1';

import { useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import updateMaterial from "../../Services/updateMaterial";

function ModMaterial(
    { setVerEdicion = { setVerEdicion },
        elegido = { elegido },
        setElegido = { setElegido } }) {

    const [nuevaDescripcion, setNuevaDescripcion] = useState("")
    const [nuevaClase, setNuevaClase] = useState("")
    const [nuevoStock, setNuevoStock] = useState("")


    const modDescripcion = (event) => {
        if (event.target.value !== null) {
            setNuevaDescripcion(event.target.value);
            console.log("descripcion", event.target.value);
        }
    };
    const modClase = (event) => {
        if (event.target.value !== null) {
            setNuevaClase(event.target.value);
        }
    };
    const modStock = (event) => {
        if (event.target.value !== null) {
            setNuevoStock(event.target.value);
        }
    };
    const modifEquipo = () => {

        const dato = {
            "clase": nuevaClase,
            "descripcion": nuevaDescripcion.toUpperCase(),
            "stock": parseInt(nuevoStock),
            "unidadMedida": "UNI"
        }

        updateMaterial(elegido._id, dato)
        setVerEdicion("none")



    };
    useEffect(() => {
        setNuevaDescripcion(elegido.descripcion);
        setNuevaClase(elegido.clase);
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
                            inputProps={{ minLength: 5, maxLength: 50}}
                            required
                        />

                    </Grid>

                    <Grid container
                        noValidate direction="row"
                        justifyContent="start"
                        alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >

                        <Grid item xs={8} container justifyContent="center" marginTop={1} marginLeft={1}>
                            <FormControl fullWidth>
                                <InputLabel id="clase"> Clase </InputLabel>
                                <Select
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    labelId="clase"
                                    id="clase"
                                    label="clase"
                                    name="clase"
                                    value={nuevaClase}
                                    onChange={modClase}
                                >
                                    <MenuItem sx={{ fontSize: 12 }} value={" "}> </MenuItem>
                                    <MenuItem sx={{ fontSize: 12 }} value={"MATERIALES"}>MATERIALES</MenuItem>
                                    <MenuItem sx={{ fontSize: 12 }} value={"MATERIAL VIDRIO"}>MATERIAL VIDRIO</MenuItem>


                                </Select>
                            </FormControl>

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
                            onClick={modifEquipo}

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

export default ModMaterial;