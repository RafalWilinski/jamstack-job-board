import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header.tsx"
import "./layout.css"
import "../fonts/Inter/inter.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
