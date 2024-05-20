import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGetPostQuery } from "./postsSlice";

import PostAuthor from "./PostAuthor";

const SinglePostPage = () => {
  const params = useParams();
  const { postId } = params;

  const { data, isFetching, isSuccess } = useGetPostQuery(postId);

  if (isFetching) {
    return <div>loading……</div>;
  }

  if (isSuccess) {
    const post = data.data;
    if (!post) {
      return (
        <section>
          <h2>页面未找到！</h2>
          <Link to="/posts">返回</Link>
        </section>
      );
    }

    return (
      <section>
        <article className="post">
          <h2>{post.title}</h2>
          <p className="post-content">{post.content}</p>
        </article>
        <div>
          <PostAuthor userId={post.admin_id} />
        </div>
        <Link
          to={`/editPost/${post.id}`}
          className="button"
          style={{ marginRight: "12px" }}
        >
          编辑
        </Link>
        <Link to="/posts">返回</Link>
      </section>
    );
  }
};

export default SinglePostPage;
