
export function getListaTxt (){
    return (  fetch('texto.json')
    .then(data => data.json())  );
}
 
