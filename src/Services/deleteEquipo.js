export default async function deleteEquipo(id) {
    try {
        const response = await fetch('http://localhost:3000/api/equipo/delete/' + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const responseText = await response.text();
        console.log(responseText);
    } catch (ex) {
        console.log(ex);
    }
} 