import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

const _initialState = [
  { id: "0", name: "Tianna Jenkins" },
  { id: "1", name: "Kevin Grant" },
  { id: "2", name: "Madison Price" },
];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return _initialState;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // builder 供了一些方法，定义额外的 case reducer，这些 reducer 将响应在 slice 之外定义的 action。
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // 如果我们返回一个新值，它将用我们返回的任何内容完全替换现有状态。
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;

export const selectUserById = (userId) => (state) =>
  state.users.find((user) => user.id === userId);

export default usersSlice.reducer;
