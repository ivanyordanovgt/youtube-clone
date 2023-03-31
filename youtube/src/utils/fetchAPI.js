import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
axios.defaults.withCredentials = false;
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '89ee939b77msh1bd7d838f746852p191320jsn6dfc667af083 ',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    "Access-Control-Allow-Origin": "*",
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
