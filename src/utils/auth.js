import { Auth } from "aws-amplify"

const isBrowser = typeof window !== `undefined`

export const setUser = user =>
  (window.localStorage.gatsbyUser = JSON.stringify(user))

const getUser = () => {
  return Auth.currentAuthenticatedUser({
    bypassCache: false,
  })
}

export const isLoggedIn = async () => {
  if (!isBrowser) return false

  const user = await getUser()
  if (user) return !!user.username
}

export const getCurrentUser = async () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return
  setUser({})
  callback()
}
