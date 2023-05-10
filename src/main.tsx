import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./utils/AppContext.tsx";

const LazyNewsFeed = React.lazy(() => import("./pages/NewsFeed.tsx"));
const LazyFriendList = React.lazy(() => import("./pages/FriendList.tsx"));
const LazyUserProfile = React.lazy(() => import("./pages/UserProfile.tsx"));
const LazyLogin = React.lazy(() => import("./pages/Login.tsx"));
const LazyRegister = React.lazy(() => import('./pages/Register.tsx'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LazyNewsFeed />,
      },
      {
        path: "friends",
        element: <LazyFriendList />,
      },
      {
        path: "user/:id",
        element: <LazyUserProfile />,
      },
    ],
  },
  {
    path: "login",
    element: <LazyLogin />,
  },
  {
    path: "register",
    element: <LazyRegister/>
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </React.StrictMode>
);
