export function getListaPedidos() {
    return fetch('http://localhost:3000/api/pedido/getAll')
        .then(data => data.json())
}

export async function getCantidadPedidos() {
    const response = await fetch('http://localhost:3000/api/pedido/getAll');
    const data = await response.json();
    const cantidad = Object.keys(data).length;

    return cantidad 
    
}