import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../../features/api/apiSlice";

// 范式化
// 返回一个对象，该对象包含 一组生成的 reducer 函数，用于从实体 state 对象中添加、更新和删除项目。
// 这些 reducer 函数既可以用作特定 action 类型的 reducer，也可以用作 createSlice 中另一个 reducer
// 中的 "mutating" 实用函数。
const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.id < b.id,
});

// 范式化初始化值
const initialState = postsAdapter.getInitialState({
  posts: [],
  status: "idle",
  error: null,
});

// RTK Query设置请求接口
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // `getPosts` endpoint 是一个返回数据的 “Query” 操作
    getPosts: builder.query({
      // 请求的 URL 是“/fakeApi/posts”
      query: () => "/article",
    }),
    getPost: builder.query({
      // 请求的 URL 是“/fakeApi/posts”
      query: (postId) => `/article/${postId}`,
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/article",
        method: "POST",
        body: initialPost,
      }),
      invalidatesTags: ["Post"],
    }),
    editPost: builder.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
    }),
  }),
});

// RTK Query导出请求接口
export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useEditPostMutation,
} = extendedApiSlice;

// 使用RTK Query获取post列表
export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select();

// 使用createSelector
// 创建记忆化的 selector，只有在输入发生变化时才会重新计算结果
const selectPostsData = createSelector(
  selectPostsResult,
  (postsResult) => postsResult.data
);

//  使用createSelector
export const selectPostsByUser = createSelector(
  [selectPostsResult, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.user === userId)
);

// 获取范式化数据
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors(
  (state) => selectPostsData(state) ?? initialState
);
