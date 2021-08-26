import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useParams } from "react-router";
import useMovieDetails from "../hooks/useMovieDetails";
import styles from "./MovieDetails.module.scss";
import GoBackButton from "../components/Navigation/GoBackButton";
import { Film, HeartFill, Heart } from "react-bootstrap-icons";
import { useEffect } from "react";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function MovieDetails(props) {
  const { movieId } = useParams();
  const imageUrl = "http://image.tmdb.org/t/p/w1280";
  const movie = useMovieDetails(movieId);
  const [isFavourite, setIsFavourite] = useState(false);
  const windowSize = useWindowSize()
  
  useEffect(() => {
    let mId = parseInt(movieId, 10);
    if (props.favourites !== undefined) {
      if (props.favourites.some((m) => m.id === mId)) {
        setIsFavourite(true);
        return;
      } else {
        setIsFavourite(false);
        return;
      }
    }
    return;
  }, [movieId, props.favourites]);

  return (
    <div>
      {movie.isSuccess && (
        <div
          style={{
            backgroundImage: `url(${imageUrl}${movie.data.backdrop_path})`,
          }}
          className={styles.backgroundImage}
        >
          <div className={`${styles.overlay} px-lg-5 py-5 px-3`}>
            <Row className="px-lg-5 px-md-3 px-sm-1">
              <Col lg="4" md="6" sm="12" className="mb-4">
                <Container className="mx-auto p-0 m-0">
                  <img
                    width={windowSize.width >= 1000 ? 300 : '100%'}
                    src={`${imageUrl}${movie.data.poster_path}`}
                    alt={movie.data.title}
                    className="rounded rounded-3 shadow-lg mx-auto"
                  />
                </Container>
              </Col>
              <Col lg="7">
                <h1>{movie.data.title}</h1>
                <h5 className={styles.tagline}>{movie.data.tagline}</h5>
                <p>{movie.data.overview}</p>
                <p>
                  <strong>Genres:</strong>{" "}
                  {movie.data.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                  <strong>Director:</strong>{" "}
                  {movie.data.credits.crew
                    .filter((p) => p.job === "Director")
                    .map((person) => person.name)
                    .join(", ")}
                </p>
                <p>
                  <strong>Cast:</strong>{" "}
                  {movie.data.credits.cast
                    .slice(0, 6)
                    .map((act) => act.name)
                    .join(", ")}
                </p>
                {movie.data.homepage && (
                  <p className="text-truncate">
                    <strong>Website:</strong>{" "}
                    <span onClick={() => window.open(`${movie.data.homepage}`)}>
                      {movie.data.homepage}
                    </span>
                  </p>
                )}
                <p className="h5">
                  {isFavourite && (
                    <OverlayTrigger
                      overlay={<Tooltip>Remove from favourites</Tooltip>}
                    >
                      <HeartFill
                        className={`me-3 ${styles.addButton} text-danger`}
                        onClick={() => props.handleFavouritesRemove(movie.data)}
                      />
                    </OverlayTrigger>
                  )}
                  {!isFavourite && (
                    <OverlayTrigger
                      overlay={<Tooltip>Add to favourites</Tooltip>}
                    >
                      <Heart
                        className={`me-3 ${styles.addButton}`}
                        onClick={() => props.handleFavouritesAdd(movie.data)}
                      />
                    </OverlayTrigger>
                  )}
                  <OverlayTrigger overlay={<Tooltip>Add to watchlist</Tooltip>}>
                    <Film className={styles.addButton} />
                  </OverlayTrigger>
                </p>
              </Col>
            </Row>
          </div>
        </div>
      )}
  {windowSize.width >= 1000 &&  <GoBackButton />}
    </div>
  );
}
