import { Auth } from "aws-amplify"
import { useEffect, useState } from "react"

function useAuthState() {
  const [isAuthLoading, setAuthLoading] = useState(true)
  const [user, setUser] = useState(null)

  const getUser = async () => {
    try {
      const payload = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      })
      setUser(payload)
    } catch (error) {
      console.warn(error)
    }

    setAuthLoading(false)
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
