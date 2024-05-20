import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import userReducer from "@/pages/Users/usersSlice";
// import postsReducer from "@/pages/Posts/postsSlice";
import { apiSlice } from "../features/api/apiSlice";

// 错误中间件
export const rtkQueryErrorLogger = (api) => (next) => (action) => {
  console.log(action, "中间件", api);
  // 只能拦截不是200的时候
  if (isRejectedWithValue(action)) {
    console.log(action, "中间件,错误信息");
    // console.log(action.error.data.message, "错误信息");
    // console.warn(action.payload.status, "当前的状态");
    // console.warn(action.payload.data?.message, "错误信息");
    // console.warn("中间件拦截了");
    // TODO 自己实现错误提示给页面上
  }
  return next(action);
};

export default configureStore({
  reducer: {
    users: userReducer,
    // posts: postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(rtkQueryErrorLogger),
});
