import React from "react";
import TodoTemplate from "./components/MyTodo/TodoTemplate";
import TodoHead from "./components/MyTodo/TodoHead";
import TodoList from "./components/MyTodo/TodoList";
import TodoCreate from "./components/MyTodo/TodoCreate";
import { MyTodoProvider } from "./MyTodoContext";

function MyTodo () {
  return (
    <MyTodoProvider>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </MyTodoProvider>
  )
}

export default MyTodo;