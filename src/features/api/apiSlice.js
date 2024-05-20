// 从特定于 React 的入口点导入 RTK Query 方法
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken, encodeToken, removeToken } from "../../utils/token";
import { printHttpError, printPanel } from "./printHttpError";

const baseUrl = import.meta.env.VITE_API_URL; //"http://localhost:5000/api/v1";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = getToken();

    if (token) {
      headers.set("Authorization", encodeToken());
    }

    return headers;
  },
});

export const fetchWithIntercept = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  console.log(result, "拦截器");

  const { data, error, meta } = result;
  const { request } = meta;
  const { code = "", message = "" } = data ?? {};
  const url = request.url;
  // 如果遇到httpStatus!=200-300错误的时候
  if (error) {
    const { status } = error;
    // 根据状态来处理错误
    printHttpError(Number(status), url);
  }
  // 正确的时候，根据各自后端约定来写的
  if (Object.is(code, 200)) {
    return result;
  } else {
    // TODO 打印提示信息
    printPanel({ method: request.method, url: request.url });
    // TODO 根据后端返回的错误提示到组件中,直接这里弹框提示也可以
    return Promise.reject(message);
  }
};

// 定义我们的单个 API Slice 对象
export const apiSlice = createApi({
  // 缓存减速器预计将添加到 `state.api` （已经默认 - 这是可选的）
  reducerPath: "api",
  // 我们所有的请求都有以 “/fakeApi” 开头的 URL
  baseQuery: fetchWithIntercept,
  // “endpoints” 代表对该服务器的操作和请求
  endpoints: () => ({}),
});
