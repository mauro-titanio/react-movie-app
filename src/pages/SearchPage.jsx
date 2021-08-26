import { useState } from "react";
import SearchedMoviesGrid from "../components/SearchedMoviesGrid";
import GoBackButton from "../components/Navigation/GoBackButton";
import SearchBar from "../components/SearchBar";
import useSearch from "../hooks/useSearch";
import useSuggestedMovies from "../hooks/useSuggestedMovies";
import Spinner from "../components/utils/Spinner";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function SearchPage() {
  const [searchText, setSearchText] = useState(
    localStorage.getItem("searchText")
  );
  const searchedMovies = useSearch(searchText);
  const suggestedMovies = useSuggestedMovies();
  const windowSize = useWindowSize();

  useEffect(() => {
    localStorage.setItem("searchText", searchText);
  }, [searchText]);

  return (
    <div>
      <SearchBar
        updateSearchText={(searchText) => {
          setSearchText(searchText);
        }}
      />
      {searchedMovies.isLoading && <Spinner />}
      {searchedMovies.isError && (
        <div>
          <Container className="px-5">
            <h3 className="text-center">Top Rated movies</h3>
          </Container>
          <SearchedMoviesGrid searchedMovies={suggestedMovies} />
        </div>
      )}
      {searchedMovies.isSuccess && (
        <SearchedMoviesGrid
          searchedMovies={searchedMovies}
          searchText={searchText}
        />
      )}
      {searchedMovies.isSuccess && searchedMovies.data.results.length === 0 && (
        <Container className="p-4 text-center">
          <p>No results</p>
        </Container>
      )}
      {windowSize.width >= 1000 && <GoBackButton />}
    </div>
  );
}
