import fetchApi from "./fetchApi";

export const fetchSeach = async (query: string) =>
  await fetchApi(`api/items${query}`);
