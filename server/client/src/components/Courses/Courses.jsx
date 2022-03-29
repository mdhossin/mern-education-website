import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { servicesData } from "../../fakedata/fakedata";
import { BsStar } from "react-icons/bs";
const Courses = () => {
  return (
    <section className="courses">
      <h2>Browse Our Top Courses</h2>

      <Row xs={1} sm={2} md={3} className="g-4">
        {servicesData.map((courses) => (
          <Col>
            <Card h-100>
              <Card.Img variant="top" src={courses.img} />
              <Card.Body>
                <h5 className="courses__name">{courses.name}</h5>
                <Card.Title className="courses__title">
                  {courses.title}
                </Card.Title>

                <p>
                  <BsStar style={{ color: "#d0d23c" }} /> ({courses.rating})
                </p>
                <div className="courses__price">
                  <div className="courses__price__enroll">
                    {courses.student.personImg}
                    <span>{courses.student.count}</span>
                  </div>

                  <div className="courses__price-price">
                    <h3>${courses.price}</h3>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "#fff" }}>
                <button>Add To Cart</button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Courses;