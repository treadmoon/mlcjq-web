import React from "react";
import { useSelector } from "react-redux";

function PostAuthor({ userId }) {
  const author = useSelector((state) => {
    return state.users.find((user) => user.id == userId);
  });

  return <span>作者： {author ? author.name : "Unknown author"}</span>;
}

export default PostAuthor;
