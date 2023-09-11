import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { getUsuario } from '../../Services/getUsuarioService';
import { formValidate } from '../../utils/formValidator';
import Theme1 from '../Theme/Theme1';

//const theme = createTheme();

export default function LoginOp() {

const {required, patternEmail, minLength, validateTrim} = formValidate()
const { register, handleSubmit, formState: { errors } } = useForm({
        //recordar sacar
        defaultValues:{
            email:"Admin01",
            password:"Test01"
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
    <ThemeProvider theme={Theme1}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input
        type="email"
        placeholder='Usuario'
        label='Usuario'
        {...register("email", { 
            required,
            pattern: patternEmail
        })}
        />
        { errors && errors.email}
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
    </ThemeProvider>

);
}