import axios from 'axios';

export function getUsuario(user, password) {
    return fetch('http://localhost:3000/api/usuario/getOneByUsuarioContrasenia/'+ user + '/' + password)
        .then(data => data.json())
}

export async function getListaUsuariosFiltrada(buscar) {
    var params={};
    if (buscar.length>0){params.buscar=buscar}
    try {
        const response = await axios({
            method: 'get',params,
            url: `http://localhost:3000/api/usuarios/`,
            responseType: 'json'
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};