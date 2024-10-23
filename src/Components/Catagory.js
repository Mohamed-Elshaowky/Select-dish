import React from "react";
import { Col, Row } from "react-bootstrap";

const Catagory = ({ filterbycatagory, allCatagory }) => {
  // To Filter By Catagory
  const onFilter = (cat) => {
    filterbycatagory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col className="d-flex justify-content-center" sm="12">
        {allCatagory.length >= 1
          ? allCatagory.map((cat) => {
              return (
                <button
                  key={cat}
                  onClick={() => onFilter(cat)}
                  className="btnn mx-2"
                >
                  {cat}
                </button>
              );
            })
          : null}
      </Col>
    </Row>
  );
};

export default Catagory;
