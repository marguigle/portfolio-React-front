import axios from "axios";

export const fetchData = async (url) => {
  try {
    console.log("Fetching from:", url);
    const response = await axios.get(url);
    console.log("Response received:", response.data);
    
    if (!response.data) {
      throw new Error("No data received from server");
    }
    
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    if (error.response?.status === 401) {
      throw new Error("No autorizado - verifique las credenciales");
    }
    if (error.response?.status === 404) {
      throw new Error("Endpoint no encontrado - verifique la URL");
    }
    if (error.response?.status === 500) {
      throw new Error("Error del servidor - intente más tarde");
    }
    throw new Error(error.message || "Error desconocido al obtener datos");
  }
};
