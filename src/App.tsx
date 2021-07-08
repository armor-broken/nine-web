/*
 * @Description:
 * @Author: RuraLiu
 * @Date: 2021-06-25 21:51:54
 * @LastEditTime: 2021-06-27 21:41:48
 * @LastEditors: RuraLiu
 */
import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
