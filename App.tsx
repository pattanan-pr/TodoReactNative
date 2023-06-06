import React, {useState, createContext, useContext, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native'
// import Mockdata from './Data'
import TodoList from './components/todolist'
import AddList from './components/addlistpage'
import DataProvider from './context/DataProvider'
import {useData} from './context/useData'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <DataProvider>
      <HomeScreen />
    </DataProvider>
  )
}

export default App
