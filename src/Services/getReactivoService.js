export function getListaReactivos() {
    return fetch('http://localhost:3000/api/reactivo/getAll')
        .then(data => data.json())
}