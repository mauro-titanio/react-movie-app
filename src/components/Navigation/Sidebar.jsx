import { Container, Offcanvas, ListGroup } from "react-bootstrap";
import { ArrowBarLeft, Film, Heart, House } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./Sidebar.module.scss";
export default function Sidebar(props) {
  const handleCloseSidebar = () => props.setShowSidebar(false);
  const windowSize = useWindowSize();

  if (props.navSize && windowSize.height) {
    const sidebarHeight = windowSize.height - props.navSize.height;
    return (
      <Offcanvas
        show={props.showSidebar}
        onHide={handleCloseSidebar}
        scroll={true}
        backdrop={false}
        style={{ height: sidebarHeight, marginTop: props.navSize.height }}
        className="border-top border-dark"
      >
        <Container
          className={`bg-secondary text-light p-0`}
          style={{ height: sidebarHeight }}
        >
          <Offcanvas.Header>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="p-0">
            <ListGroup variant="flush" className={styles.menuList}>
            <Link to="/">
                <ListGroup.Item className={styles.menuListItem} onClick={handleCloseSidebar}>
                  <House className="align-top h5 me-2" />
                  Home
                </ListGroup.Item>
              </Link>
              <Link to="/favourites">
                <ListGroup.Item className={styles.menuListItem} onClick={handleCloseSidebar}>
                  <Heart className="align-top h5 me-2" />
                  Favourites
                </ListGroup.Item>
              </Link>
              <Link to="/watchlist">
                <ListGroup.Item className={styles.menuListItem} onClick={handleCloseSidebar}>
                  <Film className="align-top h5 me-2" /> Watchlist
                </ListGroup.Item>
              </Link>
            </ListGroup>
          </Offcanvas.Body>
          <Container className="position-absolute bottom-0 end-0 m-2 text-end">
            <p onClick={handleCloseSidebar}>
              <ArrowBarLeft className="align-top h4 me-2" />
              Close
            </p>
          </Container>
        </Container>
      </Offcanvas>
    );
  } else {
    return null;
  }
}
