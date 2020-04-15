import React, { useState, useEffect } from "react"
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifyGoogleButton,
} from "@aws-amplify/ui-react"
import "@aws-amplify/ui/dist/style.css"
import { getCurrentUser } from "../utils/auth"
import useAuthState from "../hooks/useAuthState"

const Dashboard = () => {
  const { user } = useAuthState()

  return (
    <AmplifyAuthenticator>
      <AmplifySignIn slot="sign-in" />
      <AmplifyGoogleButton
        slot="sign-in"
        // clientId="187224547248-l63a4lld0b7b8s3gos7taf149f1fa8rn.apps.googleusercontent.com"
      ></AmplifyGoogleButton>
      <div>Dashboard!</div>
      <div>{JSON.stringify(user, null, 2)}</div>
    </AmplifyAuthenticator>
  )
}

export default Dashboard
