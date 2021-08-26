import axios from "axios";
import { useQuery } from "react-query";


const fetchSearch = (searchText) =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}`
    )
    .then((response) => response.data);

export default function useSearch(searchText) {
  //Arguments of useQuery (queryKey: unique argument, fetcFunction)
  return useQuery(["searchedMovies", searchText], () => fetchSearch(searchText), {retryDelay: 50, refetchOnWindowFocus:false} )
}
