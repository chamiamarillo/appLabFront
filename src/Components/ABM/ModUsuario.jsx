
import React, { useState } from "react";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Theme1 from '../Theme/Theme1';

import { useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import updateUsuario from "../../Services/updateUsuario";

const ModUsuario = (
    { setVerEdicion = { setVerEdicion },
    elegido = { elegido } ,
    setElegido={setElegido}   }

) => {
    const [nuevoUsuario, setNuevoUsuario] = useState("")
    const [nuevaContrasenia, setNuevaContrasenia] = useState("")
    const [nuevoNombre, setNuevoNombre] = useState("")
    const [nuevoApellido, setNuevoApellido] = useState("")
    const [nuevaMatricula, setNuevaMatricula] = useState("")
    const [nuevoDNI, setNuevoDNI] = useState("")
    const [email, setEmail] = useState("");
    const [nuevoPerfil, setNuevoPerfil] = useState("");
    const [nuevoEditor, setNuevoEditor] = useState("")

    const [ver, setVer] = useState("none")
    const modificarUsuario = (event) => {
        if (event !== null) {
            setNuevoUsuario(event);
            console.log("usuario", event);
        }
    };
    const modContrasenia = (event) => {
        if (event !== null) {
            setNuevaContrasenia(event);
        }
    };

    const modNombre = (event) => {
        if (event !== null) {
            setNuevoNombre(event);
        }
    };
    const modApellido = (event) => {
        if (event !== null) {
            setNuevoApellido(event);
        }
    };
    const modMatricula = (event) => {
        if (event !== null) {
            setNuevaMatricula(event);
        }
    };
    const modDNI = (event) => {
        if (event !== null) {
            setNuevoDNI(event);
        }
    };
    const modPerfil = (event) => {
        if (event !== null) {
            if (event==="LABORATORIO"){setVer("block")} else{setVer("none")}
            setNuevoPerfil(event);
        }
    };
    const modEditor = (event) => {
        if (event !== null) {
            setNuevoEditor(event);
        }
    };
    const modifUsuario = () => {
        const dato = {
            "usuario": nuevoUsuario,
            "contrasenia": nuevaContrasenia,
            "nombre": nuevoNombre.toLocaleUpperCase(),
            "apellido": nuevoApellido.toUpperCase(),
            "dni": parseInt(nuevoDNI),
            "matricula": parseInt(nuevaMatricula),
            // "admin": nuevoPerfil,
            "editor": nuevoEditor,
            "email": email,
        

        }
        if (nuevoPerfil === "DOCENTE") { dato.admin = false } else { dato.admin = true }
        setVer("none")
        setVerEdicion("none")
        updateUsuario(elegido._id,dato)
    }
    useEffect(() => {

        setNuevoUsuario(elegido.usuario);
        setNuevaContrasenia(elegido.contrasenia);
        setNuevoNombre(elegido.nombre);
        setNuevoApellido(elegido.apellido);
        setNuevaMatricula(elegido.matricula);
        setNuevoDNI(elegido.dni)
        setEmail(elegido.email);
        setNuevoPerfil(elegido.perfil);
        setNuevoEditor(elegido.editor);

        if (elegido.perfil===true){setVer("block")} else{setVer("none")}
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

            <Grid item xs={6} alignItems="center" justifyContent="start">
                <TextField

                    helperText={"debe contener 6 caracteres"}
                    sx={{ marginTop: 1, marginBottom: 1, marginLeft: 0 }}
                    fullWidth
                    required
                    id="usuario"
                    label="Usuario"
                    name="usuario"
                    InputLabelProps={{
                        shrink: true
                    }}
                    // autoComplete="descripcion"
                    autoFocus
                    value={nuevoUsuario}
                    onChange={(e) => modificarUsuario(e.target.value)}
                />

            </Grid>
            <Grid item xs={6} alignItems="center" justifyContent="start">
                <TextField

                    helperText={"debe contener 4 caracteres"}
                    sx={{ marginTop: 1, marginBottom: 1, marginLeft: 0 }}
                    fullWidth
                    required
                    id="contrasenia"
                    label="Contraseña"
                    name="contrasenia"
                    InputLabelProps={{
                        shrink: true
                    }}
                    value={nuevaContrasenia}
                    onChange={(e) => modContrasenia(e.target.value)}

                    // autoComplete="descripcion"
                    autoFocus
                />

            </Grid>
        </Grid>
        <Grid container
            noValidate direction="row"
            justifyContent="start"
            alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >
            <Grid item xs={6} alignItems="center" justifyContent="start">
                <TextField


                    sx={{ marginTop: 1, marginBottom: 1, marginLeft: 0 }}
                    fullWidth
                    required
                    id="nombre"
                    label="Nombre"
                    name="nombre"
                    InputLabelProps={{
                        shrink: true
                    }}
                    // autoComplete="descripcion"
                    autoFocus
                    value={nuevoNombre}
                    onChange={(e) => modNombre(e.target.value)}
                />
            </Grid>
            <Grid item xs={6} alignItems="center" justifyContent="start">
                <TextField

                    required
                    sx={{ marginTop: 1, marginBottom: 1, marginLeft: 0 }}
                    fullWidth
                    id="apellido"
                    label="Apellido"
                    name="apellido"
                    InputLabelProps={{
                        shrink: true
                    }}

                    autoFocus
                    value={nuevoApellido}
                    onChange={(e) => modApellido(e.target.value)}
                />


            </Grid>
        </Grid>



        <Grid container
            noValidate direction="row"
            justifyContent="start"
            alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >

            <Grid item xs={4} container justifyContent="center" >
                <TextField
                    sx={{ marginTop: 1 }}
                    fullWidth
                    id="matricula"
                    variant="outlined"
                    name="matricula"
                    label="Matricula"
                    type="number"
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                            max: 43000000, min: 5000000
                        }
                    }}
                    value={nuevaMatricula}
                    onChange={(e) => modMatricula(e.target.value)}

                />
            </Grid>

            <Grid item xs={4} container justifyContent="center" sx={{ marginLeft: 4 }} >
                <TextField
                    sx={{ marginTop: 1 }}
                    fullWidth
                    id="dni"
                    variant="outlined"
                    name="dni"
                    label="DNI"
                    type="number"
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                            max: 43000000, min: 5000000
                        }
                    }}
                    value={nuevoDNI}
                    onChange={(e) => modDNI(e.target.value)}
                />

            </Grid>
        </Grid>
        <Grid container
            noValidate direction="row"
            justifyContent="start"
            alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >



            <Grid item xs={6} container justifyContent="center" >
                <TextField
                    sx={{ marginTop: 1 }}
                    label="Email"
                    variant="outlined"
                    id="email"
                    type="email"
                    fullWidth
                    required
                    // error={error.error}
                    // helperText={error.message}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

            </Grid>
        </Grid>

        <Grid container
            noValidate direction="row"
            justifyContent="start"
            alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >

            <Grid item xs={6} container justifyContent="center" marginTop={1}
            // marginLeft={1}
            >
                <FormControl fullWidth>
                    <InputLabel id="perfil"> Perfil </InputLabel>
                    <Select
                        InputLabelProps={{
                            shrink: true,
                        }}
                        labelId="perfil"
                        id="perfil"
                        label="perfil"
                        name="perfil"
                        value={nuevoPerfil}
                        onChange={(e) => modPerfil(e.target.value)}

                    >


                        <MenuItem sx={{ fontSize: 12 }} value={"DOCENTE"}>DOCENTE</MenuItem>
                        <MenuItem sx={{ fontSize: 12 }} value={"LABORATORIO"}>LABORATORIO</MenuItem>

                    </Select>
                </FormControl>

            </Grid>
            <Grid item xs={6} display={ver} container justifyContent="center" marginTop={1}
            // marginLeft={1}
            >
                <FormControl fullWidth>
                    <InputLabel id="editor"> Permisos de Editor </InputLabel>
                    <Select
                        InputLabelProps={{
                            shrink: true,
                        }}
                        labelId="editor"
                        id="editor"
                        label="editor"
                        name="editor"
                        value={nuevoEditor}
                    onChange={(e) => modEditor(e.target.value)}

                    >

                        <MenuItem sx={{ fontSize: 12 }} value={false}>NO </MenuItem>
                        <MenuItem sx={{ fontSize: 12 }} value={true}>SI</MenuItem>


                    </Select>
                </FormControl>

            </Grid>
        </Grid>

        {/* hasta aca */}
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
                    onClick={modifUsuario}

                >
                    Modificar</Button>

            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    </Grid>

</ThemeProvider >
  )
}

export default ModUsuario