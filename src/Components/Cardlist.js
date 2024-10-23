import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
const Cardlist = ({ itemsData }) => {
  return (
    <Row>
      <Zoom left>
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <Col key={item.id} className="mb-2" sm="12">
                <Card className="d-flex flex-row">
                  <Card.Img className="img-item" variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price">{item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">
                        {item.description}{" "}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">لا يوجد اصناف</h3>
        )}
      </Zoom>
    </Row>
  );
};

export default Cardlist;
