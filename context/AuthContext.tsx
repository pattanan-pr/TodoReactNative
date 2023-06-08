import {createContext, useContext, useState} from 'react'

export const AuthContext = createContext()
export const useAuthData = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
  const [password, setPassword] = useState('')
  const [userToken, setUserToken] = useState('')

  return (
    <AuthContext.Provider
      value={{password, userToken, setUserToken, setPassword}}>
      {children}
    </AuthContext.Provider>
  )
}
