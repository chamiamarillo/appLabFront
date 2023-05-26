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




// export function axiosGetPedido(fecha_utilizacion, tipo_pedido, fecha_inicio, fecha_fin, edificio) {
//     console.log("funcion", tipo_pedido);
//     const params =
//     {
//         tipo_pedido: tipo_pedido,
//         fecha_utilizacion: fecha_utilizacion,
//         fecha_inicio: fecha_inicio,
//         fecha_fin: fecha_fin,
//         edificio: edificio
//     }


//     return fetch('http://localhost:3000/api/pedido/',
//         {
//             params: {
//                 tipo_pedido: tipo_pedido,
//                 fecha_utilizacion: fecha_utilizacion,
//                 fecha_inicio: fecha_inicio,
//                 fecha_fin: fecha_fin,
//                 edificio: edificio
//             }
//         })

//         .then(data => data.json())
// }



export async function axiosGetPedido(fecha_utilizacion, tipo_pedido, fecha_inicio, fecha_fin, edificio)  {
    console.log(fecha_inicio);
    var params={}
    if(tipo_pedido.length>0){params.tipo_pedido= tipo_pedido}
    if(edificio.length>0){params.edificio= edificio}
    if(fecha_inicio.length>0 && fecha_fin.length>0){
        params.fecha_fin=fecha_fin;params.fecha_inicio=fecha_inicio    }
    try {
        console.log("funcion",tipo_pedido);
        console.log("fecha",fecha_inicio,fecha_fin);
        const response = await axios({
            method: 'get',params,
            // params: {
            //     tipo_pedido:tipo_pedido,
            //        fecha_utilizacion: fecha_utilizacion,
            //        fecha_inicio:fecha_inicio,
            //        fecha_fin: fecha_fin,
            //        edificio:edificio},
            url: `http://localhost:3000/api/pedido/`,
            responseType: 'json'
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


