import {createContext, useContext, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()
export const useAuthData = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
  const [password, setPassword] = useState('')
  const [userToken, setUserToken] = useState('')

  // const storeUser = async (userToken) => {
  //   try {
  //     await AsyncStorage.setItem('username', userToken)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <AuthContext.Provider
      value={{password, userToken, setUserToken, setPassword}}>
      {children}
    </AuthContext.Provider>
  )
}
