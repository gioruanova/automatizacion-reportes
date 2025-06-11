import { fetchData } from "./utils/fetch.js";
import { MENSAJES_GENERICOS } from "./variables.js";

export async function showData() {
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = MENSAJES_GENERICOS.api_loading;

  try {
    const metricsData = await fetchData();
    dataContainer.innerHTML = "";

    metricsData.forEach((metric) => {
      const card = document.createElement("div");
      card.classList.add("card");

      for (const [key, value] of Object.entries(metric)) {
        const p = document.createElement("div");
        p.classList.add("card__item-value");
        const label = key
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        p.innerHTML = `<strong>${label}:</strong> ${value}`;
        card.appendChild(p);
      }

      dataContainer.appendChild(card);
    });
  } catch (error) {
    dataContainer.innerHTML = MENSAJES_GENERICOS.api_error;
  }
}
