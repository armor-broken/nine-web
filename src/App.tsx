/*
 * @Description:
 * @Author: RuraLiu
 * @Date: 2021-06-25 21:51:54
 * @LastEditTime: 2021-06-27 21:41:48
 * @LastEditors: RuraLiu
 */
import React from "react";
import "./App.css";
import { Login } from "./pages/login";
import TodoList from './pages/todo-list'

function App() {
  return (
    <div className="App">
      <Login />
      <TodoList />
    </div>
  );
}

export default App;
