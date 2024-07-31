import axios from "axios";
import {
  GenresProps,
  MovieDetailsProps,
  MovieSearchResultsProps,
} from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
  params: {
    include_adult: "false",
    include_video: "false",
    sort_by: "popularity.desc",
    language: "en-US",
    page: "1",
  },
});

export const getDataFromTMDB = async (
  endpoint: string,
  params = {},
  cacheTime?: number
) => {
  try {
    const response = await axiosInstance.get(endpoint, {
      ...{
        "cache-control": `max-age=${cacheTime || 60 * 60 * 24}`,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from TMDB:", error);
    throw error;
  }
};

export const getAllGenre = async () => {
  const data = (await getDataFromTMDB(
    "https://api.themoviedb.org/3/genre/movie/list?language=en"
  )) as GenresProps;
  return data.genres;
};

export const getMovieDetails = async (
  movie_id: number
): Promise<MovieDetailsProps> => {
  return getDataFromTMDB(`/movie/${movie_id}`);
};

export const getMovieVideo = async (movie_id: number) => {
  const data = await getDataFromTMDB(`/movie/${movie_id}/videos`);
  return data.results;
};

export const getUpcomingMovies = async () => {
  const data = (await getDataFromTMDB(
    "/movie/upcoming"
  )) as MovieSearchResultsProps;
  return data.results;
};

export const getTopRatedMovies = async () => {
  const data = (await getDataFromTMDB(
    "/movie/top_rated"
  )) as MovieSearchResultsProps;
  return data.results;
};

export const getPopularMovies = async () => {
  const data = (await getDataFromTMDB(
    "/movie/popular"
  )) as MovieSearchResultsProps;
  return data.results;
};

export const getDiscoverMovies = async (id?: string) => {
  const params: Record<string, string> = {};

  const data = (await getDataFromTMDB(
    "/discover/movie",
    params
  )) as MovieSearchResultsProps;
  return data.results;
};

export const getSearchedMovies = async (term: string) => {
  const data = (await getDataFromTMDB("/search/movie", {
    query: term,
  })) as MovieSearchResultsProps;
  return data.results;
};

export const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://links.papareact.com/o8z";
};

export const getNowPlayingMovies = async () => {
  const data = (await getDataFromTMDB(
    "/movie/now_playing"
  )) as MovieSearchResultsProps;
  return data.results;
};

export const getTrendingMovies = async () => {
  const data = (await getDataFromTMDB(
    "/trending/movie/day"
  )) as MovieSearchResultsProps;
  return data.results;
};

export const getRecommendations = async (movie_id: number) => {
  const data = (await getDataFromTMDB(
    `/movie/${movie_id}/recommendations`
  )) as MovieSearchResultsProps;
  return data.results;
};

export const getCertification = async (movie_id: number) => {
  const data = await getDataFromTMDB(`/movie/${movie_id}/release_dates`);
  return data.results;
};

export const getCompanies = async (id: number) => {
  return getDataFromTMDB(`/company/${id}`);
};
