import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native'
import React, {useState} from 'react'
import {useData} from '../context/useData'
import TodoList from '../components/TodoList'
import AddList from '../components/AddList'
import {useAuthData} from '../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {NavigationContainer} from '@react-navigation/native'

const HomeScreen = () => {
  const [addTodoVisible, setAddTodoVisible] = useState(false)
  const {data} = useData()
  const {userToken, setUserToken} = useAuthData()

  const logout = () => {
    AsyncStorage.removeItem('username')
    setUserToken(null)
  }
  const toggleAddTodoModal = () => {
    setAddTodoVisible(!addTodoVisible)
  }
  const renderList = todoList => {
    return <TodoList list={todoList} />
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botton} onPress={logout}>
        <Text style={styles.text}>logout</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          TODO <Text style={styles.textlist}>LIST</Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <Text style={styles.text2}>Hello {userToken}</Text>
      <View style={{marginVertical: 48}}>
        <TouchableOpacity style={styles.botton2} onPress={toggleAddTodoModal}>
          <Text style={styles.text3}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 275, paddingLeft: 36}}>
        <FlatList
          data={data}
          keyExtractor={item => item.name}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => renderList(item)}
        />
      </View>
      <Modal
        animationType="slide"
        visible={addTodoVisible}
        onRequestClose={toggleAddTodoModal}>
        <AddList close={() => toggleAddTodoModal()} />
      </Modal>
    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: '#b0e0e6',
    height: 8,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#000000',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  textlist: {
    fontWeight: '400',
    color: '#1e90ff',
  },
  text2: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6C6B6B',
  },
  text3: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  },
  botton: {
    position: 'absolute',
    top: 64,
    right: 32,
    zIndex: 10,
    backgroundColor: '#BFBFBF',
    padding: 10,
    borderRadius: 10,
  },
  botton2: {
    backgroundColor: '#b0e0e6',
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
  },
})
