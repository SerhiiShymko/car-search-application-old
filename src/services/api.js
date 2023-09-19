import axios from 'axios';

const url = axios.create({
  baseURL: 'https://648860930e2469c038fd986c.mockapi.io/api/v1/adverts',
});

export const api = async (brand) => {
  const { data } = await url.get('/', { params: { brand } });
  return data;
};

// export const api = async () => {
//   const { data } = await url.get('/');
//   return data;
// };