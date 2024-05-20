import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useAddNewPostMutation } from "./postsSlice";
import { selectAllUsers } from "../Users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && !isLoading;

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await addNewPost({
          title,
          description: content,
          content: `首先${content}，其次${content}，最后${content}`,
          img_url: "https://cn.vitejs.dev/logo.svg",
          category_id: "2",
          browse: 99,
          seo_keyword: "React",
          admin_id: userId,
        }).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to save the post: ", err);
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const spinner = isLoading ? <div>loading……</div> : null;

  return (
    <section className="post-edit">
      <h2>添加新文章</h2>
      <form>
        <label htmlFor="postTitle">文章标题:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">作者:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">内容：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          保存文章
        </button>
        {spinner}
      </form>
    </section>
  );
};

export default AddPostForm;
