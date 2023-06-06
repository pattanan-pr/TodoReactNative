import {useState, createContext, useContext} from 'react'

export const value = {
  data: [],
  setData: () => undefined,
  name: '',
  setName: () => undefined,
}

export const DataContext = createContext(value)
export const useData = () => useContext(DataContext)
