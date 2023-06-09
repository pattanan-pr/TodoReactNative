import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../context/AuthContext'
import {useAuthData} from '../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {
  const {userToken, setUserToken, password, setPassword} = useAuthData()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
    getUser()
  }, [])

  const storeUser = async () => {
    try {
      if (user !== null) {
        await AsyncStorage.setItem('username', user)
      } else {
        await AsyncStorage.removeItem('username')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('username')
      setUserToken(savedUser)
    } catch (error) {
      console.log(error)
    }
  }

  const check = () => {
    storeUser(user)
    setUserToken(user)
    setPassword(pass)
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/hpimg.jpeg')} style={styles.image} />
      <Text style={styles.title}>Login</Text>
      <View style={styles.input}>
        <Text style={{marginLeft: 10, fontSize: 23, color: '#613C10'}}>@</Text>
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 0,
            marginLeft: 10,
            color: '#613C10',
          }}
          placeholder="your username"
          onChangeText={(text) => setUser(text)}
        />
      </View>
      <View style={styles.input}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 23,
            color: '#613C10',
          }}>
          @
        </Text>
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 0,
            marginLeft: 10,
            color: '#613C10',
          }}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text) => setPass(text)}
        />
        <TouchableOpacity>
          <Text style={{color: '#ccc'}}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          check()
        }}
        style={styles.button}>
        <Text style={styles.textnormal}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#793D17',
    marginBottom: 30,
  },
  image: {
    width: 380,
    height: 320,
  },
  input: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    marginHorizontal: 30,
  },
  textnormal: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
  },
  button: {
    width: '80%',
    backgroundColor: '#994B1B',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
})
