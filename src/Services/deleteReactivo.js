export default async function deleteReactivo(id) {
    try {
        const response = await fetch('http://localhost:3000/api/reactivo/delete/' + id, {
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