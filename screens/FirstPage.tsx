import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import {useAuthData} from '../context/AuthContext'

const FirstPage = ({navigation}) => {
  const {setUserToken} = useAuthData()
  const logout = () => {
    AsyncStorage.removeItem('username')
    setUserToken(null)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Please select your option</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text3}>Todo App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WeatherPage')}>
        <Text style={styles.text3}>Weather App</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#b0e0e6',
    padding: 10,
    borderRadius: 10,
    width: 350,
    alignItems: 'center',
    marginBottom: 10,
  },
  text3: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  },
  logoutButton: {
    position: 'absolute',
    backgroundColor: '#BFBFBF',
    padding: 10,
    borderRadius: 10,
    top: 64,
    right: 32,
    zIndex: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
})
