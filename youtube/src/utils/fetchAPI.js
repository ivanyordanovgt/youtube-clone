import axios from "axios";

const axios = require("axios");
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions'
const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
    },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const fetchAPI = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options)
}