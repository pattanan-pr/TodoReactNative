import {View, Text, StyleSheet} from 'react-native'
import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import LoginScreen from '../screens/LoginScreen'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'

const AppNav = () => {
  const {isLoading, userToken, password} = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {userToken === 'Hehe' && password === 'password' ? (
          <HomeScreen />
        ) : (
          <LoginScreen />
        )}
      </NavigationContainer>
    </View>
  )
}

export default AppNav

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
