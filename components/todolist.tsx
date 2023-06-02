import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native'
import TodoModal from './todomodal'

const TodoList = ({list}) => {
  const [visibleList, setVisibleList] = useState(false)

  const toggleListModal = () => {
    setVisibleList(!visibleList)
  }

  const completedTask = list.todos.filter(todos => todos.completed).length
  const remainTask = list.todos.length - completedTask
  return (
    <View>
      <Modal
        animationType="slide"
        visible={visibleList}
        onRequestClose={toggleListModal}>
        <TodoModal list={list} closeModal={() => toggleListModal()} />
      </Modal>
      <TouchableOpacity
        onPress={() => toggleListModal()}
        style={[styles.listcont, {backgroundColor: list.colors}]}>
        <Text style={styles.title} numberOfLines={1}>
          {list.name}
        </Text>

        <View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.count}>{remainTask}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.count}>{completedTask}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  listcont: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200,
    height: 500,
  },
  count: {
    fontSize: 38,
    fontWeight: '200',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '200',
    color: '#ffffff',
  },
})
