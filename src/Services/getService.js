
//EQUIPOS

export function getListaEquipos() {
    return fetch('http://localhost:3000/api/equipo/getAll')
        .then(data => data.json())
}


//MATERIALES
export function getListaMateriales() {
    return fetch('http://localhost:3000/api/material/getAll')
        .then(data => data.json())
}

// REACTIVOS

export function getListaReactivos() {
    return fetch('http://localhost:3000/api/reactivo/getAll')
        .then(data => data.json())
}
