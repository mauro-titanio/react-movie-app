
import styles from "./SearchedMoviesGrid.module.scss";
import MovieCard from "./MovieCard";

export default function SearchedMoviesGrid(props) {
  return (
    <div>
      {props.searchedMovies.isSuccess && (
        <div className={styles.moviesGrid}>
          {props.searchedMovies.data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      )}
    </div>
  );
}
