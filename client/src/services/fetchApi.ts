const fetchApi = async (url: string) => {
  const response = await fetch("http://localhost:3001/" + url);
  return await response.json();
};

export default fetchApi;
