import { API_KEY, API_DELAY, MENSAJES_GENERICOS } from "../variables.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function fetchData() {
  return fetch(API_KEY)
    .then((response) => {
      if (!response.ok) throw new Error(MENSAJES_GENERICOS.api_error);
      return response.json();
    })
    .then(async (data) => {
      await delay(API_DELAY);
      console.log(data.reportes);

      return data.reportes;
    })
    .catch((error) => {
      console.error(MENSAJES_GENERICOS.api_error_desconocido, error);
      throw error;
    });
}
