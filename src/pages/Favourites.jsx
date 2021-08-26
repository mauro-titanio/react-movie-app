import { Container } from "react-bootstrap";
import FavouritesGrid from "../components/FavouritesGrid";

export default function Favourites(props) {

  return (
    <div>
      {props.favourites.length >= 1 && (
        <div>
          <Container className="p-4 text-center">
            <h1>Favourites</h1>
          </Container>
          <Container className="px-4">
            {" "}
            <FavouritesGrid favourites={props.favourites} />
          </Container>
        </div>
      )}
      {props.favourites.length === 0 && (
        <Container className="p-4 text-center">
          <p>Favourites list is empty</p>
        </Container>
      )}
    </div>
  );
}
