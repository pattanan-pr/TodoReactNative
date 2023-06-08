import React from 'react'
import DataProvider from './context/DataProvider'
import HomeScreen from './screens/HomeScreen'
import {NavigationContainer} from '@react-navigation/native'
import LoginScreen from './screens/LoginScreen'
import {AuthProvider} from './context/AuthContext'
import AppNav from './navigation/AppNav'
import 'react-native-gesture-handler'
import {View} from 'react-native'

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <View style={{flex: 1}}>
          <AppNav />
        </View>
        {/* <LoginScreen /> */}
        {/* <<HomeScreen />> */}
      </DataProvider>
    </AuthProvider>
  )
}

export default App
