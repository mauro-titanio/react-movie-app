import MovieCard from "./MovieCard";
import styles from "./SearchedMoviesGrid.module.scss";

export default function FavouritesGrid(props) {
  return (
    <div>
      <div className={styles.moviesGrid}>
        {props.favourites.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
}
