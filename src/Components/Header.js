import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col className="justify-content-center d-flex" sm="12">
        <div className="justify-content-center text-center">
          <div className="title text-center">قائمة طعام</div>
          <p className="underline"></p>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
