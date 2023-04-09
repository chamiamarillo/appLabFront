export function getEquipoPorId (id) {
      return fetch('http://localhost:3000/api/equipo/getOne/' + id)
      
    .then(data => data.json())
}
 

