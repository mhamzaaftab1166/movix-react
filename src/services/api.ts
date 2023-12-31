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
export interface Genre {
  id: number;
  name: string;
}
export interface detail {
  id: number;
  title: string;
  name: string;
  genres: Genre[];
  release_date: string;
  vote_average: number;
  tagline: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  status: string;
  runtime: number;
}
export interface movies {
  results: movie[];
  total_results: number;
  total_pages: number;
}
export const fetchData = (
  url: string,
  params?: AxiosRequestConfig["params"]
) => {
  return axios.get<movies>(BASE_URL + url, { headers, params });
};
export const fetchSearch = (
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
export const fetchVideos = (
  url: string,
  params?: AxiosRequestConfig["params"]
) => {
  return axios.get(BASE_URL + url, { headers, params });
};
export const fetchCredits = (
  url: string,
  params?: AxiosRequestConfig["params"]
) => {
  return axios.get(BASE_URL + url, { headers, params });
};
