import * as React from "react";
import { User } from "./index";

interface SearchProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchProps["param"]) => void;
}

export const Search = ({ users, param, setParam }: SearchProps) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(evt) => setParam({ ...param, name: evt.target.value })}
      />
      <select
        value={param.personId}
        onChange={(evt) => setParam({ ...param, personId: evt.target.value })}
      >
        <option value="">负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
