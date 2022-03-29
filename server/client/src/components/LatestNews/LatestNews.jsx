import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { latestNews } from "../../fakedata/fakedata";
const LatestNews = () => {
  return (
    <section className="latest">
      <h2>Latest News</h2>

      <Row xs={1} sm={2} md={3} className="g-4">
        {latestNews.map((latest, i) => (
          <Col key={i}>
            <Card>
              <Card.Img height="250" variant="top" src={latest.img} />
              <Card.Body>
                {/* <h5 className="courses__name">{courses.name}</h5> */}
                <p>
                  <span>{latest.date.dateLogo}</span>
                  <span>{latest.date.time}</span>
                </p>
                <Card.Title className="courses__title">
                  {latest.title}
                </Card.Title>

                <Card.Text>{latest.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default LatestNews;
