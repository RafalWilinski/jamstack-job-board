import React, { useState, useEffect } from "react"
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifyGoogleButton,
} from "@aws-amplify/ui-react"
import "@aws-amplify/ui/dist/style.css"
import useAuthState from "../hooks/useAuthState"

const Dashboard = () => {
  const { user } = useAuthState()

  return (
    <AmplifyAuthenticator>
      <AmplifyGoogleButton slot="sign-in"></AmplifyGoogleButton>
      <div>Dashboard!</div>
      <div>{JSON.stringify(user, null, 2)}</div>
    </AmplifyAuthenticator>
  )
}

export default Dashboard
