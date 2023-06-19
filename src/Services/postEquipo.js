// router.post("/equipo/post", async (req, res) => {
//     const data = new Equipo({
//       clase: req.body.clase,
//       descripcion: req.body.descripcion,
//       stock: req.body.stock,
//       unidadMedida: req.body.unidadMedida,
//     });
  
//     try {
//       const dataToSave = await data.save();
//       res.status(200).json(dataToSave);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   });

  export async function postEquipo(data) {

    const requestJson = JSON.stringify(data);
    try {
      const response = await fetch("http://localhost:3000/api/equipo/post", {
        method: "POST",
        body: requestJson,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const responseText = await response.text();
      console.log(responseText);
    } catch (e) {
      console.log(e);
    }
  
  };
  export default postEquipo;
  