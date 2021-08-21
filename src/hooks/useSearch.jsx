import axios from "axios";
import { useQuery } from "react-query";


const fetchSearch = (searchText) =>
  axios
    .get(
      `${process.env.REACT_APP_API_BASE_URL}/search/movie/?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}`
    )
    .then((response) => response.data);

export default function useSearch(searchText) {
  //Arguments of useQuery (queryKey: unique argument, fetcFunction)
  return useQuery(["searchedMovies", searchText], () => fetchSearch(searchText), {retryDelay: 50, refetchOnWindowFocus:false} )
}
