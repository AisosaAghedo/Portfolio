import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-4 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <Col key={i} xs={12} sm={12} md={6} lg={4} className="po_item">
              <Card style={{ width: "18rem", marginBottom: "2.5rem" }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body style={{ height: "15rem" }}>
                  <Card.Text>{data.description}</Card.Text>
                  <Button variant="tertiary" >
                      <a href={data.link}>View Project</a>
                      
                      <a href={data.demo}>View Repository</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
