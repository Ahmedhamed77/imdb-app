import {$host} from '../axios';

export const getMovies = async (searchKey: string) => {
  const response = await $host.get(`?s=${searchKey}&apikey=263d22d8`);
  return response.data.Search;
};
