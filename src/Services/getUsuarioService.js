export function getUsuario(user, password) {
    return fetch('http://localhost:3000/api/usuario/getOneByUsuarioContrasenia/'+ user + '/' + password)
        .then(data => data.json())
}