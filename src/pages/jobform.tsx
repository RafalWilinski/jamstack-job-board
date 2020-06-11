import React from "react"
import Amplify from "aws-amplify"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormContainer from "../components/FormContainer"
import config from "../aws-exports"

Amplify.configure(config)

const JobFormPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Job form" />
    <FormContainer />
    </Layout>
  )
}

export default JobFormPage
