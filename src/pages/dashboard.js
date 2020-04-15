import React from "react"
import { withAuthenticator } from "aws-amplify-react"
import "@aws-amplify/ui/dist/style.css"

const Dashboard = () => {
  return <div>Dashboard!</div>
}

export default withAuthenticator(Dashboard)
