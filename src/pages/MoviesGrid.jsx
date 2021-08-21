import useSuggestedMovies from "../hooks/useSuggestedMovies";
import { Container, Row } from "react-bootstrap";
import MoviesCarousel from "../components/MoviesCarousel";
import useComedyMovies from "../hooks/useComedyMovies";
import useDramaMovies from "../hooks/useDramaMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import { useEffect } from "react";

export default function MoviesGrid() {
  const suggestedMovies = useSuggestedMovies();
  const comedyMovies = useComedyMovies();
  const dramaMovies = useDramaMovies();
  const horrorMovies = useHorrorMovies();
  
  useEffect(() => {
    localStorage.setItem("searchText", "");
  }, []);

  return (
    <Container className="p-4">
      <Container className="py-4">
        <Row className="px-3">
          <h4>Suggested movies</h4>
          <MoviesCarousel movies={suggestedMovies}></MoviesCarousel>
        </Row>
      </Container>
      <Container className="py-4">
        <Row className="px-3">
          <h4>Comedy</h4>
          <MoviesCarousel movies={comedyMovies}></MoviesCarousel>
        </Row>
      </Container>
      <Container className="py-4">
        <Row className="px-3">
          <h4>Drama</h4>
          <MoviesCarousel movies={dramaMovies}></MoviesCarousel>
        </Row>
      </Container>
      <Container className="py-4">
        <Row className="px-3">
          <h4>Horror</h4>
          <MoviesCarousel movies={horrorMovies}></MoviesCarousel>
        </Row>
      </Container>
    </Container>
  );
}
