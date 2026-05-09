import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL_BASE || "http://localhost:3001/api";

const getToken = () => localStorage.getItem("token");

export async function uploadImage(file) {
  const token = getToken();
  
  const response = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: (() => {
      const formData = new FormData();
      formData.append("file", file);
      return formData;
    })(),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al subir imagen");
  }

  const data = await response.json();
  return data.url;
}