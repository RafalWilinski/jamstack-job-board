import React from "react"
import "@aws-amplify/ui/dist/style.css"
import useAuthState from "../hooks/useAuthState"
import RegisterPage from "../components/RegisterPage"

const Dashboard = () => {
  const { user } = useAuthState()

  return (
      <div className="bg-white">
        <RegisterPage />
          <div>Dashboard!</div>
          <div>{JSON.stringify(user, null, 2)}</div>
      </div>
  )
}

export default Dashboard
