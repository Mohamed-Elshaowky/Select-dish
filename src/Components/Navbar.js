import React, { useState } from "react";
import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";

const Navv = ({ filterSearch }) => {
  const [searchvalue, setSearchvalue] = useState("");
  const onsearch = (e) => {
    filterSearch(searchvalue);
    setSearchvalue("");
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // منع التصرف الافتراضي لنموذج HTML
  };
  return (
    <Row>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                placeholder="ابحث"
                className="mx-2"
                onChange={(e) => setSearchvalue(e.target.value)}
                value={searchvalue}
              />
              <button onClick={() => onsearch()} className="btn-search">
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default Navv;
