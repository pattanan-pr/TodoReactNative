import React from 'react'
import DataProvider from './context/DataProvider'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <DataProvider>
      <HomeScreen />
    </DataProvider>
  )
}

export default App
