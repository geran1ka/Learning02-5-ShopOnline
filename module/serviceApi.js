export const getDataArticle = async (url) => {
  const result = await fetch (`${url}`);
  const data = await result.json();
  return data;
}