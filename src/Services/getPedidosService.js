import axios from 'axios';

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


export async function getListaPedidosAxios() {
    try {
        const response = await axios.get('http://localhost:3000/api/pedido') /*, {
        params: {
            fecha_utilizacion: '2023-05-02',
            tipo_pedido: 'ACEPTADO'
        }});*/
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export function axiosGetPedido(fecha_utilizacion, tipo_pedido, fecha_inicio, fecha_fin, edificio) {
    console.log("funcion", tipo_pedido);
    const params =
    {
        tipo_pedido: tipo_pedido,
        fecha_utilizacion: fecha_utilizacion,
        fecha_inicio: fecha_inicio,
        fecha_fin: fecha_fin,
        edificio: edificio
    }


    return fetch('http://localhost:3000/api/pedido/',
        {
            params: {
                tipo_pedido: tipo_pedido,
                fecha_utilizacion: fecha_utilizacion,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                edificio: edificio
            }
        })

        .then(data => data.json())
}