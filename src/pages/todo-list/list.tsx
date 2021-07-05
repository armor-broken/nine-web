import * as React from "react";
import { User } from "./index";

type Project = {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
};

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ users, list }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((e) => (
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>
              {users.find((user) => user.id === e.personId)?.name || "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
