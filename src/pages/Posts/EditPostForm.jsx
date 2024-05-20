import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditPostMutation, useGetPostQuery } from "./postsSlice";

function EditPostForm() {
  const { postId } = useParams();

  const {
    data: { data: post },
  } = useGetPostQuery(postId);

  const [updatePost, { isLoading }] = useEditPostMutation();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = async () => {
    if (title && content) {
      await updatePost({ id: postId, title, content });
      navigate(`/posts/${postId}`);
    }
  };

  const spinner = isLoading ? <div>saving……</div> : null;

  return (
    <section className="post-edit">
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
          disabled={isLoading}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          disabled={isLoading}
        />
      </form>
      <button type="button" onClick={onSavePostClicked} disabled={isLoading}>
        保存
      </button>
      {spinner}
    </section>
  );
}

export default EditPostForm;
