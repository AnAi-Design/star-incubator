import * as React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "gatsby";

const Navbar = () => {
    return (
      <>
        <div id="navbar" className="navbar-area">
          <Container fluid>
            <nav className="navbar navbar-expand-lg">
              <Link to="/" className="navbar-brand">
                starIncubator
              </Link>
            </nav>
          </Container>
        </div>
      </>
    )
  }
  
  export default Navbar