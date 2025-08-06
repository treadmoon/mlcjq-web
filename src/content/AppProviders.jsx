import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import router from "../routes";
import store from "../store";

import { fetchUsers } from "../pages/Users/usersSlice";
store.dispatch(fetchUsers());

const queryClient = new QueryClient();

export default function AppProviders() {
  return (
    <Provider store={store}>
      {/* <QueryClientProvider client={queryClient}> */}
        <Suspense fallback={<div>loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      {/* </QueryClientProvider> */}
    </Provider>
  );
}
