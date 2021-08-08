import axios from 'axios';

const url = 'https://www.omdbapi.com/';
const baseURL = url;
//https://www.omdbapi.com/?s=starwars&apikey=263d22d8&page=1
export const $host = axios.create({
  baseURL,
});
