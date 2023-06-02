import {useState, createContext, useContext} from 'react'

const UserContext = createContext()

export default Mockdata = [
  {
    name: 'Shopping for dinner',
    colors: `#a52a2a`,
    todos: [
      {
        title: 'Vegetables',
        completed: false,
      },
      {
        title: 'Meat',
        completed: false,
      },
      {
        title: 'Watermalon',
        completed: false,
      },
      {
        title: 'Fruit',
        completed: false,
      },
      {
        title: 'Cocoa',
        completed: true,
      },
    ],
  },
  {
    name: 'Plan the exam date',
    colors: `#1e90ff`,
    todos: [
      {
        title: 'Math',
        completed: true,
      },
      {
        title: 'Calculus',
        completed: true,
      },
      {
        title: 'Physics',
        completed: false,
      },
    ],
  },
  {
    name: 'Exchange Data in Sow',
    colors: `#daa520`,
    todos: [
      {
        title: 'Math',
        completed: true,
      },
      {
        title: 'Calculus',
        completed: false,
      },
    ],
  },
]
