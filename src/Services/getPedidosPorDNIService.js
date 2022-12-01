export function getPedidosPorDni(dni) {
    return fetch('http://localhost:3000/api/pedido/getAllByDni/' + dni)
        .then(data => data.json())
}