/*slint-disable */
import { createContext, useState } from "react";
import { fetchData } from "../services/apiService";

const FetchContextPersona = createContext();

function FetchContextProviderWrapper({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let ruta = "/persona";
  const fetchDataFromApi = async () => {
    const url = import.meta.env.VITE_URL_BASE;
    setLoading(true);
    try {
      const persona = await fetchData(url + ruta);
      console.log("Persona response:", persona);
      setData(Array.isArray(persona.response) ? persona.response : []);
    } catch (err) {
      console.error("Error fetching persona:", err);
      setError(err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FetchContextPersona.Provider
      value={{ fetchDataFromApi, data, loading, error }}
    >
      {children}
    </FetchContextPersona.Provider>
  );
}

export { FetchContextPersona, FetchContextProviderWrapper };
