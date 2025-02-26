import axios from "axios";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data; // Asumiendo que siempre esperas un campo llamado 'response'
  } catch (error) {
    throw new Error(error.message);
  }
};
