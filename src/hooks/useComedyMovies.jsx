import axios from "axios";
import { useQuery } from "react-query";

const fetchComedyMovies = () =>
  axios
    .get(
      `${process.env.REACT_APP_API_BASE_URL}/discover/movie`,
      {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          sort_by: "popularity.desc",
          with_genres: "35"
        },
      }
    )
    .then((response) => response.data);

export default function useComedyMovies() {
  //Arguments of useQuery (queryKey: unique argument, fetcFunction)
  return useQuery("comedyMovies", fetchComedyMovies);
}
