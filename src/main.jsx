import Root from "./Routes/Root";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Routes/Home/Home";
import Statistics from "./Routes/Statistics/Statistics";
import Dashboard from "./Routes/Dashboard/Dashboard";
import ErrorPage from "./ErrorPage";
import ProductDetails from "./Routes/DetailsSection/ProductDetails";
import { InterestProvider } from "./Routes/Context/InterestContext";
import { Toaster } from 'react-hot-toast'
import About from "./Routes/About Us/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/gadgetsData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch("/gadgetsData.json"),
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
        loader: () => fetch("/gadgetsData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InterestProvider>
      <RouterProvider router={router} />
      <Toaster />
    </InterestProvider>
  </StrictMode>
);
