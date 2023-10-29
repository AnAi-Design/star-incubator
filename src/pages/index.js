import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import HeroBanner from "../components/LandingPage/HeroBanner"
import About from "../components/LandingPage/About"
import Footer from "../components/_App/Footer"

const IndexPage = () => (
  <Layout>
    <Navbar/>
    <HeroBanner/>
    <About/>
    <Footer/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
