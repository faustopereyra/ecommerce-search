import fetch from "node-fetch";
import { RequestMeliAPIError } from "../errors/request-meli-api-error";

const fetchAPI = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === 404) throw new RequestMeliAPIError(data.error);
    return data;
  } catch (error) {
    throw new RequestMeliAPIError("Not Found");
  }
};

export const searchAPI = async (query: any) =>
  await fetchAPI(`https://api.mercadolibre.com/sites/MLA/search?q=:${query}`);
export const itemDetailAPI = async (id: string) =>
  await fetchAPI(`https://api.mercadolibre.com/items/${id}`);
export const itemDescriptionAPI = async (id: string) =>
  await fetchAPI(`https://api.mercadolibre.com/items/${id}/description`);
