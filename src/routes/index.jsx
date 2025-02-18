import {
  createBrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { lazy, useEffect } from "react";

import App from "@/App";

const Home = lazy(() => import("@/pages/Home"));
// const LangDoc = lazy(() => import("@/pages/LangDoc"));
// const Notes = lazy(() => import("@/pages/Notes"));
// const MinPg = lazy(() => import("@/pages/MinPg"));
// const Posts = lazy(() => import("@/pages/Posts"));

const SinglePostPage = lazy(() => import("@/pages/Posts/SinglePostPage"));
const EditPostForm = lazy(() => import("@/pages/Posts/EditPostForm"));
const AddPostForm = lazy(() => import("@/pages/Posts/AddPostForm"));
const UserPage = lazy(() => import("@/pages/Users/UserPage"));
const ErrorPage = lazy(() => import("@/views/ErrorPage"));
const Admin = lazy(() => import("@/views/admin"));

const pagesModule = import.meta.glob("../pages/**/index.jsx");
const mainRouters = getRoutersByPath(pagesModule, pagePath =>
  pagePath.replace(/^\.\.\/pages\/(.+)\/index\.jsx$/, "$1")
);

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <BeforeProvider>
        <App />
      </BeforeProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/langDoc",
      //   element: <LangDoc />,
      // },
      // {
      //   path: "/notes",
      //   element: <Notes />,
      // },
      // {
      //   path: "/minPg",
      //   element: <MinPg />,
      // },
      // {
      //   path: "/posts",
      //   element: <Posts />,
      // },
      // {
      //   path: "/posts/:postId",
      //   element: <SinglePostPage />,
      // },
      // {
      //   path: "/editPost/:postId",
      //   element: <EditPostForm />,
      // },
      // {
      //   path: "/addPost",
      //   element: <AddPostForm />,
      // },
      // {
      //   path: "/users/:userId",
      //   element: <UserPage />,
      // },
      // {
      //   path: "/myadmin",
      //   element: <Admin />,
      // },
      ...mainRouters,
    ],
  },
]);

function getRoutersByPath(pagesModule, getName) {
  return Object.entries(pagesModule).map(([pagePath, config]) => {
    const fileName = getName(pagePath);
    const MyComponent = lazy(config);
    return {
      path: `/${fileName.toLowerCase()}`,
      element: <MyComponent key={fileName} />,
    };
  });
}

function BeforeProvider({ children }) {
  const location = useLocation();
  const navigator = useNavigate();
  useEffect(() => {
    // console.log("change location.pathname");
    // console.log({ location, navigator });
  }, [location.pathname]);
  return children;
}
