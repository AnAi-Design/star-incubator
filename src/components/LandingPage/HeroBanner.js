import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import HeroImage from "../../images/si-hero.svg"

const HeroBanner = () => {
  return (
    <>
      <div className="hero-area section">
        <Container>
          <Row>
            <Col className="hero-content" md={6}>
              <h1 className="hero-title">
                Unlock Your Potential, Ignite Your Success
              </h1>
              <p className="hero-description">
                Let us guide you to unleash your full potential, achieve your
                goals, and transform your aspirations into tangible results
              </p>
            </Col>
            <Col className="hero-image-wrapper" md={6}>
              <img className="hero-image" src={HeroImage} alt="Hero Image" />
            </Col>
          </Row>
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

export default HeroBanner
