import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/static/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import Blogsdetails from "../pages/Blogsdetails";



import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    element: <Layout />,
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
        path: "/services",
        element: <Service />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blogsdetails",
        element: <Blogsdetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
