import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import JobListing from "../components/JobListing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <JobListing />
  </Layout>
)

export default IndexPage
