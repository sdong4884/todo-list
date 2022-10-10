import React, { createContext, useContext, useReducer, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  }
]

function myTodoReducer (state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo)
    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo)
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
    default:
      throw new Error(`Unhandled action type ${action.type}`)
  }
}

const MyTodoStateContext = createContext()
const MyTodoDispatchContext = createContext()
const MyTodoNextIdContext = createContext()

export function MyTodoProvider ({ children }) {
  const [state, dispatch] = useReducer(myTodoReducer, initialTodos)
  const nextId = useRef(2)

  return (
    <MyTodoStateContext.Provider value={state}>
      <MyTodoDispatchContext.Provider value={dispatch}>
        <MyTodoNextIdContext.Provider value={nextId}>
          {children}
        </MyTodoNextIdContext.Provider>
      </MyTodoDispatchContext.Provider>
    </MyTodoStateContext.Provider>
  )
}

export function useMyTodoState () {
  const context = useContext(MyTodoStateContext)
  if (!context) throw new Error('Cannot find MyTodoProvider')
  return context
}
export function useMyTodoDispatch () {
  const context = useContext(MyTodoDispatchContext)
  if (!context) throw new Error('Cannot find MyTodoProvider')
  return context
}
export function useMyTodoNextId () {
  const context = useContext(MyTodoNextIdContext)
  if (!context) throw new Error('Cannot find MyTodoProvider')
  return context
}