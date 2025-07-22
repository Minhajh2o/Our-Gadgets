import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Routes/Root";
import Home from "./Routes/Home/Home";
import Statistics from "./Routes/Statistics/Statistics";
import Dashboard from "./Routes/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
