import { Card } from "react-bootstrap";
import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <Card
      className={`${styles.movieCard} mx-auto mb-4 border-0  bg-dark ${movie.poster_path ? '' : 'd-none'}`}
       /*onMouseEnter={() => setImagePath(movie.backdrop_path)} onMouseLeave={() => setImagePath(movie.poster_path)}*/
    >
      <Card.Img src={imageUrl} className={`${styles.movieImage} shadow`} />
      <Card.ImgOverlay className={`${styles.overlay}`}>
        <div className={styles.cardContent}>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text className={`${styles.cardText} ${styles.lineClamp}`}>
            {movie.overview}
          </Card.Text>
          <Link
            to={"/details/" + movie.id}
            className={`${styles.cardButton} btn btn-primary btn-sm`}
          >
            Read more
          </Link>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}
