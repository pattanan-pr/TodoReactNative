import React, {useEffect, useState} from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native'
import {useData} from '../context/useData'

export interface TodoList {
  color: string
  name: string
  todos: {
    title: string
    completed: boolean
  }[]
}
interface Props {
  close: () => void
}

const AddList: React.FC<Props> = ({navigation}) => {
  const [selectedColor, setSelectedColor] = useState('#fa8072')
  const {setData} = useData()
  const {name, setName} = useData()
  useEffect(() => {
    setName('')
  }, [])

  const colors = [
    '#fa8072',
    '#808000',
    '#afeeee',
    '#663399',
    '#ffa500',
    '#b22222',
    '#00ffff',
  ]

  const renderColor = () => {
    return colors.map((color) => (
      <TouchableOpacity
        key={color}
        style={[styles.colorSelect, {backgroundColor: color}]}
        onPress={() => setSelectedColor(color)}
      />
    ))
  }

  const createTodo = () => {
    setData((prevData) => [
      ...prevData,
      {
        name,
        color: selectedColor,
        todos: [
          {
            title: 'something',
            completed: false,
          },
        ],
      },
    ])

    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        style={{position: 'absolute', top: 64, right: 32}}
        onPress={() => navigation.navigate('Home')}>
        <Text>close</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>Create your list</Text>
        <TextInput
          style={styles.input}
          placeholder="What is your task?"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          {renderColor()}
        </View>
      </View>
      <TouchableOpacity
        style={[styles.create, {backgroundColor: selectedColor}]}
        onPress={createTodo}>
        <Text style={{color: '#fff', fontWeight: '700'}}>create</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default AddList

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
})
