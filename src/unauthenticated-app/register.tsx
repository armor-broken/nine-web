/*
 * @Description:
 * @Author: RuraLiu
 * @Date: 2021-06-27 21:37:01
 * @LastEditTime: 2021-06-27 22:20:20
 * @LastEditors: RuraLiu
 */
import React from "react";
import { useAuth } from "context/auth-context";

export interface User {
  username: string;
  password: string;
}

export const Register = () => {
  const { register, user } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    register({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>注册</button>
    </form>
  );
};
