import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import {Grid,Box,Button } from "@mui/material";
import { getUsuario } from '../../Services/getUsuarioService';
import { formValidate } from '../../utils/formValidator';
import logo_universidad from '../Image/logo-universidad.png';
import "./login.css";
//const theme = createTheme();

export default function LoginOp() {

const {required, patternEmail, minLength, validateTrim} = formValidate()
const { register, handleSubmit, formState: { errors } } = useForm({
        //recordar sacar
        defaultValues:{
            email:"Admin01",
            password:"123123"
        }
    });

    const onSubmit = async({email, password}) => {
    try {
        await getUsuario(email, password)
        console.log('usuario logeado');
        Navigate('/')
    } catch (error) {
        console.log(error.code);
        // const {code, message} = erroresFirebase(error.code)
        // setError(code,{ message })       
    } 
}
    

return (
   /* <ThemeProvider theme={Theme1}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input
        type="text"
        placeholder='Usuario'
        label='Usuario'
        {...register("user", { 
            required
        })}
        />
        { errors && errors.user}
        <input
        type="password"
        placeholder='Contraseña'
        label='Contraseña'
        {...register("email", { 
            minLength,
            pattern: validateTrim
        })}
        />
        { errors && errors.password}
        <button type="submit" >Logearse</button>
    </form>
    </ThemeProvider>*/
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
}