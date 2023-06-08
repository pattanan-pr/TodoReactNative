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

// type Todo = {
//   completed: boolean
//   title: string
// }

// type TodoList = {
//   color: string
//   name: string
//   todos: Todo[]
// }

const HomeScreen = () => {
  const [addTodoVisible, setAddTodoVisible] = useState(false)
  const {data} = useData()
  const {userToken} = useAuthData()
  const toggleAddTodoModal = () => {
    setAddTodoVisible(!addTodoVisible)
    console.log(userToken)
    // getUser()
  }

  // const getUser = async () => {
  //   try {
  //     const userData = JSON.parse(await AsyncStorage.getItem('username'))
  //   } catch (error) {
  //   }
  // }
  const renderList = todoList => {
    console.log(todoList)
    return <TodoList list={todoList} />
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          TODO <Text style={{fontWeight: '300', color: '#1e90ff'}}>LIST</Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={{marginVertical: 48}}>
        <TouchableOpacity>
          <Text onPress={toggleAddTodoModal}>Add</Text>
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
    height: 5,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#000000',
  },
})
