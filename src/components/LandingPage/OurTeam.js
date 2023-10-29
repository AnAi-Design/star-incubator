import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import HeroImage from "../../images/si-about.svg"

const OurTeam = () => {
  return (
    <>
      <div className="about-area section">
        <Container>
          <div>
            <h4 className="section-heading">About</h4>
            <h2 className="section-title">
              Unlock Your Potential, Ignite Your Success
            </h2>
            <p className="section-paragraph">
              Let us guide you to unleash your full potential, achieve your
              goals, and transform your aspirations into tangible results
            </p>
          </div>

          <Row className="card-container">
            <Col className="team-card " md = {6}>
              <img className="team-card_img" src={HeroImage} alt="About" />
              <div className="team-card_content">
                <p>Name</p>
                <p>Title</p>
                <p>
                  Let us guide you to unleash your full potential, achieve your
                  goals, and transform your aspirations into tangible results
                </p>
              </div>
            </Col>

            <Col className="team-card" md = {6}>
              <img className="team-card_img" src={HeroImage} alt="About" />
              <div className="team-card_content">
                <p>Name</p>
                <p>Title</p>
                <p>
                  Let us guide you to unleash your full potential, achieve your
                  goals, and transform your aspirations into tangible results
                </p>
              </div>
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

export default OurTeam
