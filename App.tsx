import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native'
import Mockdata from './Mockdata'
import TodoList from './components/todolist'
import AddList from './components/addlistpage'

const App = () => {
  const [addTodovisible, setAddTodovisible] = useState(false)

  const toggleAddTodoModal = () => {
    setAddTodovisible(!addTodovisible)
  }

  const renderList = todoList => {
    return <TodoList list={todoList} />
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          TODO <Text style={{fontWeight: '300', color: `#1e90ff`}}>LIST</Text>
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
          data={Mockdata}
          keyExtractor={item => item.name}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => renderList(item)}
        />
      </View>
      <Modal
        animationType="slide"
        visible={addTodovisible}
        onRequestClose={toggleAddTodoModal}>
        <AddList close={() => toggleAddTodoModal()} />
      </Modal>
    </View>
  )
}

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

export default App
