import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";


export default function SearchBar(props) {

  return (
    <Row className="justify-content-center p-4 mb-4">
      <Col lg={8}>
        <InputGroup>
          <Form.Control type="text" size="lg" defaultValue={localStorage.getItem("searchText")} placeholder="Search..." className="bg-dark border-0 border-bottom rounded-0 text-light" onChange={(e)=> props.updateSearchText(e.target.value)}/>
          <InputGroup.Text className="bg-dark border-0 border-bottom rounded-0 text-light">
            <Search/>
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
}
