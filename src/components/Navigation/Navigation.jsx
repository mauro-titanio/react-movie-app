import Sidebar from "./Sidebar";
import { useState } from "react";
import useDimensions from "react-use-dimensions";
import { Navbar, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [nav, navSize] = useDimensions();

  return (
    <div>
      <Navbar
        ref={nav}
        collapseOnSelect
        expand="lg"
        bg="secondary"
        variant="primary"
      >
        <Container fluid className="px-4">
          <Navbar.Brand onClick={() => setShowSidebar(!showSidebar)}>
           React-Movie DB
          </Navbar.Brand>
          <Link to="/search"><Search/></Link>
        </Container>
        
      </Navbar>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} navSize={navSize} />
    </div>
  );
}
