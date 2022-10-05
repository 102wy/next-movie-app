import axios from "axios";

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

export const movieAPI = {
  getPopular: () =>
    api.get(`/movie/popular?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`),
  getDetail: (id) =>
    api.get(`/movie/${id}?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`),
};
