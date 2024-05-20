import React from "react";

import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { selectUserById } from "../Users/usersSlice";
import { selectAllPosts } from "../Posts/postsSlice";

function UserPage(props) {
  const params = useParams();
  const { userId } = params;
  const user = useSelector(selectUserById(userId));

  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.user === userId);
  });

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  );
}

export default UserPage;
