import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please selesct your option</Text>
      <TouchableOpacity
        style={styles.botton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text3}>Todo App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botton}>
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
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    borderRadius: 10,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  botton: {
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
})