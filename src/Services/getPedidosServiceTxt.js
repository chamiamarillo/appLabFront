import texto from './texto.json';
export function getListaTxt (){
    console.log(texto);
    return Promise.resolve(texto.pedidos);
}
 
