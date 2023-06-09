import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import axios from 'axios'

const WeatherPage = ({navigation}) => {
  const [userul, setUserul] = useState('thailand')
  const [userserch, setUserSearch] = useState('thailand')
  const [data, setData] = useState({main: {temp: 0}})

  const fetchData = async (urlstr2: string) => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?&appid=3a17de987e3d08b15d6eebd25e005912&units=metric' +
          '&q=' +
          urlstr2,
      )
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData(userserch)
  }, [userserch])

  const searchTown = async () => {
    setUserSearch(userul)
    await fetchData(userserch)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View>
          <View style={{marginBottom: 30}}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -404,
                left: 32,
                zIndex: 10,
              }}
              onPress={() => navigation.goBack()}>
              <Text style={{color: '#fff'}}>back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containertext}>
            <View style={styles.containtop}>
              <Image
                source={require('../assets/navi.png')}
                style={styles.icon2}
              />
              <View style={styles.input}>
                <TextInput
                  placeholder="Search"
                  style={styles.text}
                  onChangeText={(text) => setUserul(text)}
                />
              </View>
              <TouchableOpacity onPress={searchTown}>
                <Image
                  source={require('../assets/icon.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>
              {data?.main?.temp}
              <Text style={styles.textlist}>°C</Text>
            </Text>
            <Text style={styles.text2}>{userserch}</Text>
            <Text style={styles.text3}>
              {data?.weather?.length && data?.weather[0]?.description}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default WeatherPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containertext: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 30,
    marginTop: -350,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 75,
    fontWeight: '800',
    color: '#ffff',
    marginTop: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: '200',
    color: '#ffff',
  },
  text2: {
    fontSize: 30,
    fontWeight: '500',
    color: '#ffff',
    marginTop: 20,
  },
  text3: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ccc',
  },
  textlist: {
    fontSize: 80,
    fontWeight: '400',
    color: '#ffff',
  },
  input: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#737373',
    opacity: 0.7,
    paddingBottom: 8,
    marginBottom: 25,
    marginHorizontal: 20,
    width: 300,
  },
  containtop: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: -10,
  },
  icon2: {
    width: 25,
    height: 30,
    marginRight: -5,
  },
  icon3: {
    width: 200,
    height: 110,
    marginRight: -5,
  },
})
