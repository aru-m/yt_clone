
import axios from 'axios';
const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '8a11e990c5msh02aab1af47668f7p13a429jsna92fa7339ae5',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };