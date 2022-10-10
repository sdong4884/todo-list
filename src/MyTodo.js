import React from "react";
import TodoTemplate from "./components/MyTodo/TodoTemplate";
import TodoHead from "./components/MyTodo/TodoHead";
import TodoList from "./components/MyTodo/TodoList";
import TodoCreate from "./components/MyTodo/TodoCreate";

function MyTodo () {
  return (
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplate>
  )
}

export default MyTodo;