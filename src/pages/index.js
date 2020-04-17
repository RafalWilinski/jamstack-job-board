import React from "react"
import Amplify from "aws-amplify"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import JobListing from "../components/JobListing"
import config from "../../config"

Amplify.configure(config)

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      {data.allListing.nodes.map(listing => (
        <JobListing name={listing.position} location={listing.location} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allListing {
      nodes {
        id
        description
        location
        company {
          id
          name
          logo
        }
        position
      }
    }
  }
`

export default IndexPage
