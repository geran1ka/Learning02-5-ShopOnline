export const getDataArticle = async (url, id = '') => {
  const result = await fetch(`${url}/${id}`);
  const data = await result.json();
  return data;
};
