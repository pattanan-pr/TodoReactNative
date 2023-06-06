import React, {useState} from 'react'
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import {useData} from '../context/useData'

const AddTask = ({list, closeModal}) => {
  const [taskName, setTaskName] = useState('')
  const {data, setData} = useData()

  const addTask = () => {
    const updatedData = data.map(item => {
      if (item.name === list.name) {
        return {
          ...item,
          todos: [
            ...item.todos,
            {
              title: taskName,
              completed: false,
            },
          ],
        }
      }
      return item
    })
    setData(updatedData)
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
      <Text style={styles.title}>Task Detail</Text>
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

export default AddTask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
