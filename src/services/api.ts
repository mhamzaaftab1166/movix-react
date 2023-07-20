import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};
export interface movie {
  id: number;
  title: string;
  name: string;
  release_Date: string;
  vote_average: number;
  media_type: string;
  backdrop_path: string;
  poster_path: string;
}
export interface detail {
  id: number;
  title: string;
  name: string;
  release_Date: string;
  vote_average: number;
  media_type: string;
  backdrop_path: string;
  poster_path: string;
}
export interface movies {
  results: movie[];
}
export const fetchData = (
  url: string,
  params?: AxiosRequestConfig["params"]
) => {
  return axios.get<movies>(BASE_URL + url, { headers, params });
};
export const fetchDetail = (
  url: string,
  params?: AxiosRequestConfig["params"]
) => {
  return axios.get<detail>(BASE_URL + url, { headers, params });
};
export const fetchUrls = (
  url: string,
  params?: AxiosRequestConfig["params"]
) => {
  return axios.get(BASE_URL + url, { headers, params });
};
