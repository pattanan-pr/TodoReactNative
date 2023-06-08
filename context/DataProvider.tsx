import React, {useMemo, useState} from 'react'
import {DataContext} from './useData'

const DataProvider = ({children}) => {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const dataValue = useMemo(
    () => ({
      data,
      setData,
      name,
      setName,
    }),
    [data, setData, name, setName],
  )
  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  )
}

export default DataProvider
