const FetchPelis = async (e) => {
  const key = "a2e10dea6bc047cee94303a21c8ab461";
  return fetch(
    `https://api.themoviedb.org/3/${e}/popular?api_key=${key}&language=es`
  )
    .then((res) => res.json())/* 
    .then((data) => data.results); */
};
export const FetchOne = async (e, id) => {
  const key = "a2e10dea6bc047cee94303a21c8ab461";
  return fetch(
    `https://api.themoviedb.org/3/${e}/${id}?api_key=${key}&language=es`
  ).then((res) => res.json()); /* 
    .then((data) => data.results); */
};

export default FetchPelis;
