/* existing imports */
import React from 'react';
import ReactDOM from 'react-dom/client'
import './components/index.css'
import Root from "./routes/Root"
import { 
  createBrowserRouter, 
  RouterProvider,
  Link, 
  Route
} from "react-router-dom";
import Profile from "./components/profile";
import Login from './components/Login';
import App from './components/index';
import Home from './components/Home';
import PostForm from './components/PostForm';
import Logout from './components/Logout';
import EditPost from './Components/EditPost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/index",
        element: <App />,
      },
      {
        path: "/postform",
        element: <PostForm />
      },
      {
        path: "/editpost",
        element: <EditPost />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
