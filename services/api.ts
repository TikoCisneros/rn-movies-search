import { MediaType, ApiResult } from '~/models';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const getTrends =
  (page: number = 1) =>
  async (): Promise<ApiResult> => {
    const response = await fetch(
      `${BASE_URL}/trending/all/day?language=en-US&api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    return data;
  };

export const getSearchResults = async (query: string): Promise<ApiResult> => {
  const response = await fetch(
    `${BASE_URL}/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`
  );
  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
  const response = await fetch(`${BASE_URL}/${type}/${id}?language=en-US&api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
