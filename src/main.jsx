/* existing imports */
import React from 'react';
import ReactDOM from 'react-dom/client'
import Root from "./routes/Root"
import { 
  createBrowserRouter, 
  RouterProvider 
} from "react-router-dom";
import Home from "./components/home";
import {App} from './Components';
import About from './Components/about';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/index",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
