import React, {useState} from 'react'
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import Mockdata from '../Mockdata'

const DetailTask = ({list, closeModal}) => {
  const [taskName, setTaskName] = useState('')

  const addTask = () => {
    const ID = Mockdata.findIndex(value => value.name === list.name)
    Mockdata[ID].todos.push({
      title: taskName,
      completed: false,
    })
    setTaskName('')
    closeModal()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={closeModal}
        style={{position: 'absolute', top: 64, right: 32, zIndex: 10}}>
        <Text>back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Task Detail?</Text>
      <TextInput
        style={styles.input}
        placeholder="Add your task name"
        value={taskName}
        onChangeText={text => setTaskName(text)}
      />
      <TouchableOpacity style={styles.create} onPress={addTask}>
        <Text style={{color: '#000', fontWeight: '700'}}>create</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DetailTask

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
    fontWeight: '600',
    color: '#000000',
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
})
