export function getListaEquipos() {
    return fetch('http://localhost:3000/api/equipo/getAll')
        .then(data => data.json())
}