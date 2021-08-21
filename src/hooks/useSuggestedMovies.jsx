import axios from "axios";
import { useQuery } from "react-query";

const fetchSuggestedMovies = () =>
  axios
    .get(
      `${process.env.REACT_APP_API_BASE_URL}/discover/movie`,
      {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          sort_by: "popularity.desc",
        },
      }
    )
    .then((response) => response.data);

export default function useSuggestedMovies() {
  //Arguments of useQuery (queryKey: unique argument, fetcFunction)
  return useQuery("suggestedMovies", fetchSuggestedMovies);
}
