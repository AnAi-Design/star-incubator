import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import Service1 from "../../images/si-service-1.png"
import Service2 from "../../images/si-service-2.png"
import Service3 from "../../images/si-service-3.png"

const Services = () => {
  return (
    <>
      <div className="services-area section">
        <Container>
          <div className="text-center">
            <h4 className="section-heading">Services</h4>
            <h1 className="section-title">
              Unlock Your Potential, Ignite Your Success
            </h1>
            <p className="section-paragraph">
              Let us guide you to unleash your full potential, achieve your
              goals, and transform your aspirations into tangible results
            </p>
          </div>

          <div className="services-container">
            <div>
              {/* sservice - 1 */}
              <Row className="service-item">
                <Col className="service-img-wrapper" md={6}>
                  <img className="service-img" src={Service1} alt="Hero" />
                </Col>

                <Col className="service-item-content" md={6}>
                  <h6 className="service-item-title">
                    Unlock Your Potential, Ignite Your Success
                  </h6>
                  <p className="service-item-description">
                    Let us guide you to unleash your full potential, achieve
                    your goals, and transform your aspirations into tangible
                    results
                  </p>
                </Col>
              </Row>

              {/* service -2 */}
              <Row className="service-item">
                <Col className="service-img-wrapper" md={6}>
                  <img className="service-img" src={Service2} alt="Hero" />
                </Col>
                <Col className="service-item-content" md={6}>
                  <h6 className="service-item-title">
                    Unlock Your Potential, Ignite Your Success
                  </h6>
                  <p className="service-item-description">
                    Let us guide you to unleash your full potential, achieve
                    your goals, and transform your aspirations into tangible
                    results
                  </p>
                </Col>
              </Row>

              {/* service - 3 */}
              <Row className="service-item">
                <Col className="service-img-wrapper" md={6}>
                  <img className="service-img" src={Service3} alt="Hero" />
                </Col>
                <Col className="service-item-content" md={6}>
                  <h6 className="service-item-title">
                    Unlock Your Potential, Ignite Your Success
                  </h6>
                  <p className="service-item-description">
                    Let us guide you to unleash your full potential, achieve
                    your goals, and transform your aspirations into tangible
                    results
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default Services
