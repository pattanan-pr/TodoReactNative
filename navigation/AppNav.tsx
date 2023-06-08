import {View, Text, StyleSheet, Dimensions} from 'react-native'
import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import LoginScreen from '../screens/LoginScreen'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import HomeStack from './HomeStack'

const AppNav = () => {
  const {isLoading, userToken, password} = useContext(AuthContext)
  console.log(userToken)
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <View style={{flex: 1}}>
          {userToken === 'Hehe' ? (
            <View style={{flex: 1, width: Dimensions.get("window").width}}>
              <HomeStack />
            </View>
          ) : (
            <LoginScreen />
          )}
        </View>
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
