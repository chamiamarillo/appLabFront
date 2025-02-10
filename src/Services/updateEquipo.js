import axios from 'axios';
import { token } from "./getToken";

export default async function updateEquipo(id, data) {
    const body = JSON.stringify(data);
    try {
      const response = await axios.patch(`${process.env.REACT_APP_API_URL}/api/equipo/update/${id}`, body, {
        headers: {        
          Authorization: `Bearer ${token()}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  