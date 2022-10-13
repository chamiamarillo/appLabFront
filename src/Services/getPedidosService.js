export function getListaPedidos() {
    return fetch('http://localhost:3000/api/pedido/getAll')
        .then(data => data.json())
}