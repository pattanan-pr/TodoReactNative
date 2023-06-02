import {Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'
import Mockdata from '../Mockdata'

const DelatedTask = ({
  list,
  closeModal,
  index: taskIndex,
  namei: nameIndex,
}) => {
  const deletedTodo = () => {
    const updatedTodos = [...Mockdata[nameIndex].todos]
    updatedTodos.splice(taskIndex, 1)
    Mockdata[nameIndex].todos = updatedTodos
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
export default DelatedTask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: '#b0e0e6',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '400',
    color: '#000000',
    marginTop: 50,
    marginBottom: 30,
  },
  listconst: {
    paddingVertical: 24,
    fontWeight: '500',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
