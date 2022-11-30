export function getListaMateriales() {
    return fetch('http://localhost:3000/api/material/getAll')
        .then(data => data.json())
}