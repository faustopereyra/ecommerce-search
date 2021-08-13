import fetchApi from "./fetchApi";

export const fetchProducts = async (id: string) =>
  await fetchApi(`api/items/${id}`);
