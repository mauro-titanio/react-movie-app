import axios from "axios";
import { useQuery } from "react-query";

const fetchDramaMovies = () =>
  axios
    .get(
      `${process.env.REACT_APP_API_BASE_URL}/discover/movie`,
      {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          sort_by: "popularity.desc",
          with_genres: "18"
        },
      }
    )
    .then((response) => response.data);

export default function useDramaMovies() {
  //Arguments of useQuery (queryKey: unique argument, fetcFunction)
  return useQuery("dramaMovies", fetchDramaMovies);
}
