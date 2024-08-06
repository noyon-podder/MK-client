import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import DashboardLayout from "../components/layout/DashboardLayout";
import AddProduct from "../components/page/dashboard/AddProduct";
import Dashboard from "../components/page/dashboard/Dashboard";
import ProductPage from "../pages/Product/ProductPage";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,

    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "dashboard/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);
