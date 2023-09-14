import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Theme1 from "../Theme/Theme1";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { getUsuario } from "../../Services/getUsuarioService";
import CartelAlerta from "../Mensajes/CartelAlerta";
import logo_universidad from '../Image/logo-universidad.png';

import "./login.css";
function Copyright(props) {
  return (
    <Typography variant="body2" color="secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        App.Laboratorio
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//const theme = createTheme();

export default function Login() {
  const [texto, setTexto] = React.useState(
    "UNAHUR-DESARROLLO DE APLICACIONES-CARGA DE PEDIDOS DE LABORATORIO"
  );
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState("");
  const [mensajeAlerta, setMensajeAlerta] = React.useState(
    "Datos incorrectos, verifique usuario y password"
  );

  // ************************************
  const handleClose = () => {
    setAnchorEl(null);

    // setMensajeAlerta("Faltan Cargar Datos")
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const re_direccion = (usuario, editor) => {
    if (usuario === false) {
      navigate("/Docente/Pedidos");
    } else if (usuario === true) {
      navigate("/Laboratorio/Pedidos");
    } else {
      navigate("/login");
    }
  };

  const handleSubmit = async(event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const datos = await getUsuario(data.get('user'), data.get('password'));
      const info = event.currentTarget;
      Promise.resolve(datos).then(value => {
        if ((value).length === 0) {

    const data = new FormData(event.currentTarget);
    const datos = getUsuario(data.get("user"), data.get("password"));
    const info = event.currentTarget;

    Promise.resolve(datos).then((value) => {
      console.log(value.length);
      if (value.length === 0) {
        setAnchorEl(info);
      } else {
        re_direccion(value[0].admin, value[0].editor);
        localStorage.setItem("usuario", JSON.stringify(value[0]));
      }
    });
  };

  return (
    <Box className="container">
      <Grid container>
        <Grid item xs={0} md={4}></Grid>
        <Grid item xs={12} md={4}>
          <Box className="container-login">
            <img
              src={logo_universidad}
              alt="logo-universidad"
            />
          </Box>
          <Box className="containter-form-login">
            <Box>
              <p className="title-login">Ingreso</p>
            </Box>
            <Box className="container-input">
            <input className="input-login" type="text" placeholder="Usuario" />
            </Box>
            <Box>
            <input className="input-login" type="password" placeholder="Contraseña"/>
            </Box>
            <Button className="button-login" variant="contained">Login</Button>
          </Box>
        </Grid>
        <Grid item xs={0} md={4}></Grid>
      </Grid>
    </Box>
  );

