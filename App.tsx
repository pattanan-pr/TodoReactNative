import React from 'react'
import DataProvider from './context/DataProvider'
import HomeScreen from './screens/HomeScreen'
import {NavigationContainer} from '@react-navigation/native'
import LoginScreen from './screens/LoginScreen'
import {AuthProvider} from './context/AuthContext'
import AppNav from './navigation/AppNav'

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <AppNav />
        {/* <LoginScreen /> */}
        {/* <<HomeScreen />> */}
      </DataProvider>
    </AuthProvider>
  )
}

export default App
