import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "../error-page.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }, // For unmatched routes
    ],
  },
]);

export default router;
