import React, {useContext} from 'react'
import {Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import {DataContext} from '../context/useData'
export interface Todo {
  completed: boolean
  title: string
}
export interface TodoList {
  color: string
  name: string
  todos: Todo[]
}

interface Props {
  list: TodoList
  closeModal: boolean
  index: number
  nameIndex: number
}

const DeletedTask: React.FC<Props> = ({
  list,
  closeModal,
  index: taskIndex,
  nameIndex,
}) => {
  const {data, setData} = useContext(DataContext)

  const deletedTodo = () => {
    const updatedData = [...data]
    updatedData[nameIndex].todos.splice(taskIndex, 1)
    setData(updatedData)
    closeModal()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={deletedTodo}>
        <Text>Delete This Task!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DeletedTask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
