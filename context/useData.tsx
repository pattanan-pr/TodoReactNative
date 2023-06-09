import {createContext, useContext} from 'react'

type valueType = {
  // data: any[],
  // setData:
}

export const value: valueType = {
  data: [],
  setData: () => undefined,
  name: '',
  setName: () => undefined,
}

export const DataContext = createContext(value)
export const useData = () => useContext(DataContext)
