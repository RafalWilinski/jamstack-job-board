import React from "react"
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifyGoogleButton,
} from "@aws-amplify/ui-react"
import "@aws-amplify/ui/dist/style.css"

const Dashboard = () => {
  return (
    <AmplifyAuthenticator>
      <AmplifyGoogleButton
        slot="sign-in"
        clientId="187224547248-l63a4lld0b7b8s3gos7taf149f1fa8rn.apps.googleusercontent.com"
      ></AmplifyGoogleButton>
      <div>Dashboard!</div>
    </AmplifyAuthenticator>
  )
}

export default Dashboard
