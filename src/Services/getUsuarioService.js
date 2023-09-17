import axios from 'axios';
import { urlBD } from '../connectDB';

export const getUsuario = async(user, password) => {
    try {
        const data = await fetch(`${urlBD}/api/usuario/getOneByUsuarioContrasenia/${user}/${password}`)
        return data.json()
    } catch (error) {
        console.log(error)
    }
    
        
}

export async function getListaUsuariosFiltrada(buscar) {
    var params={};
    if (buscar.length>0){params.buscar=buscar}
    try {
        const response = await axios({
            method: 'get',params,
            url: `${urlBD}/api/usuarios/`,
            responseType: 'json'
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};