
export function getPedidosServiceTxt (){
    return (  fetch('texto.txt')
    .then(data => data.json())  );
}
 
