import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`

function TodoList () {
  return (
    <TodoListBlock>
      <TodoItem text="할 일1" done />
      <TodoItem text="할 일2" done />
      <TodoItem text="할 일3" />
      <TodoItem text="할 일4" />
    </TodoListBlock>
  )
}

export default TodoList;