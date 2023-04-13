import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35338818-8c83ef1df0113f9421ce59f32';

export const FetchData = async (querry, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: querry,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return await response.data;
};
