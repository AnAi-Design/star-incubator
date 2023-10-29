import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import HeroImage from "../../images/si-hero.svg"

const Services = () => {
  return (
    <>
      <div className="services-area section">
        <Container>
          <h4 classnName="section-heading"></h4>
          <h1 className="services-title">
            Unlock Your Potential, Ignite Your Success
          </h1>
          <p className="services-desc">
            Let us guide you to unleash your full potential, achieve your goals,
            and transform your aspirations into tangible results
          </p>

          <div className="services-container">
            <div>
              <Row className="service-item">
                <Col className="service-item-content" md={6}>
                  <h1 className="services-item-title">
                    Unlock Your Potential, Ignite Your Success
                  </h1>
                  <p className="service-item-description">
                    Let us guide you to unleash your full potential, achieve
                    your goals, and transform your aspirations into tangible
                    results
                  </p>
                </Col>
                <Col className="service-img-wrapper" md={6}>
                  <img className="service-img" src={HeroImage} alt="Hero" />
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
