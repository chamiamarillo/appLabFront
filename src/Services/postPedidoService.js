

export async function postPedido (data) {
   
    const requestJson = JSON.stringify(data);
        try {
          const response = await fetch("http://localhost:3000/api/pedido/post", {
            method: "POST",
            body: requestJson,
            headers: {
              'Content-Type': 'application/json',
          }
          });
          const responseText = await response.text();
          console.log(responseText);
        } catch (ex) {
          console.log(ex);
        }
      
      };
export default postPedido;
   
        
   
    // const generarPedido = async (e) => {
    //     e.preventDefault();
    //     const requestData = {
    //       "docente":{"nombre":"Juan","apellido":"Zoto","dni":"123457899","matricula":"8887777"},
    //       "descripcion":"Pedido 432",
    //       "fecha_solicitud":"12-12-2022",
    //       "fecha_utilizacion":"12-12-2022",
    //       "numero_laboratorio":"21",
    //       "tipo_pedido":"algo",
    //       "cantidad_grupos":"2",
    //       "observaciones":"algo mas",
    //       "materia":"materia",
    //       "numero_tp":"2",
    //       "lista_equipos":[{"cantidad":"4","equipo":"632ce2be440396e0a4b23273"},{"cantidad":"14","equipo":"6344646e38d65c4c39c1975d"}],
    //       "lista_reactivos":[{"cantidad":"43","reactivo":"635f25214e10e04827f04037"},{"cantidad":"14","reactivo":"635f250d4e10e04827f04035"}],
    //       "lista_materiales":[{"cantidad":"1","material":"635f2604e4611f482be98fff"}]
    //     };
    //     const requestJson = JSON.stringify(requestData);
    //     try {
    //       const response = await fetch("http://localhost:3000/api/pedido/post", {
    //         method: "POST",
    //         body: requestJson,
    //         headers: {
    //           'Content-Type': 'application/json',
    //       }
    //       });
    //       const responseText = await response.text();
    //       console.log(responseText);
    //     } catch (ex) {
    //       console.log(ex);
    //     }
    //   };
    