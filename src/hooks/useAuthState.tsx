import { Auth } from "aws-amplify"
import { useEffect, useState } from "react"

function useAuthState() {
  const [isAuthLoading, setAuthLoading] = useState(true)
  const [user, setUser] = useState(null)

  const getUser = async () => {
    const payload = await Auth.currentAuthenticatedUser({
      bypassCache: false,
    })

    setAuthLoading(false)
    setUser(payload)
  }

  useEffect(() => {
    getUser()
  }, [])

  return {
    user,
    isLoggedIn: user !== null,
    isAuthLoading,
  }
}

export default useAuthState
