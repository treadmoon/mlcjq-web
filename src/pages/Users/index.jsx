import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";

function Users(props) {
  const users = useSelector(selectAllUsers);
  return (
    <div>
      <h2>用户</h2>
      {users.map((user) => user.name)}
    </div>
  );
}

export default Users;
