import React from "react";
import styled from "styled-components";
import { useMyTodoState } from "../../MyTodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`

function TodoList () {
  const todos = useMyTodoState()

  return (
    <TodoListBlock>
      {todos.map(todo =>
        <TodoItem 
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />  
      )}
    </TodoListBlock>
  )
}

export default TodoList;