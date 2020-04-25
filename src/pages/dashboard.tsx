import React from "react"
import "@aws-amplify/ui/dist/style.css"
import useAuthState from "../hooks/useAuthState"
import RegisterPage from "../components/RegisterPage"
import SEO from "../components/seo"

const Dashboard = () => {
  const { user } = useAuthState()

  return (
      <>
      <SEO title="Join us" />
        <RegisterPage />
          <div>Dashboard!</div>
          <div>{JSON.stringify(user, null, 2)}</div>
      </>
  )
}

export default Dashboard
