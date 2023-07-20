import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import SearchResult from "./pages/search/SearchResult";
import Explore from "./pages/explore/Explore";
import Detail from "./pages/detail/Detail";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/explore/:id", element: <Explore></Explore> },
      { path: "/:mediaType/:id", element: <Detail></Detail> },
      { path: "/search/movie/:query", element: <SearchResult></SearchResult> },
    ],
  },
]);
export default route;
