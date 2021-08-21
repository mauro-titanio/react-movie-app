import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Favourites from "./pages/Favourites";
import MovieDetails from "./pages/MovieDetails";
import MoviesGrid from "./pages/MoviesGrid";
import SearchPage from "./pages/SearchPage";
import { useState, useEffect } from "react";

function App() {
  const queryClient = new QueryClient();
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const moviesFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (moviesFavourites !== null) {
      setFavourites(moviesFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((m) => m.id !== movie.id);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <MoviesGrid />
            </Route>
            <Route exact path="/details/:movieId">
              <MovieDetails
                handleFavouritesAdd={addFavouriteMovie}
                handleFavouritesRemove={removeFavouriteMovie}
                favourites={favourites}
              />
            </Route>
            <Route exact path="/search">
              <SearchPage />
            </Route>
            <Route exact path="/favourites">
              <Favourites favourites={favourites} />
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
