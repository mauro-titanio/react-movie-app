import axios from "axios";
import { useQuery } from "react-query";

const fetchMovieDetails = (movieId) =>
  axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        append_to_response: "credits",
      },
    })
    .then((response) => response.data);

export default function useMovieDetails(movieId) {
  //Arguments of useQuery (queryKey: unique argument, fetcFunction)
  return useQuery(["movie", movieId], () => fetchMovieDetails(movieId));
}
