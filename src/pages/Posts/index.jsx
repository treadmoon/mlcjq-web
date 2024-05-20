import React from "react";
import { Link } from "react-router-dom";

import { useGetPostsQuery } from "./postsSlice";
// import { AddPostForm } from "./AddPostForm";

import TimeAgo from "./TimeAgo";

import "./index.less";

function Posts() {
  const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery();

  let content;

  if (isLoading) {
    content = <div>loading……</div>;
  } else if (isSuccess) {
    const posts = data.data.data;
    content = (
      <div className="post-container">
        <h2>水文列表</h2>
        {/* <AddPostForm /> */}
        <ul className="posts-list-container">
          {posts.map((post) => {
            return (
              <li key={post.id} className="post-container">
                <div className="title">{post.title}</div>
                <div className="content">{post.content}</div>
                <div>{/* <ReactionButtons post={post} /> */}</div>
                <div>
                  <TimeAgo timestamp={post.date} />
                </div>
                <Link to={`/posts/${post.id}`} className="button muted-button">
                  详情
                </Link>
                <div
                  style={{ border: "1px solid #fff", margin: "4px 0 18px 0" }}
                ></div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return content;
}

export default Posts;
