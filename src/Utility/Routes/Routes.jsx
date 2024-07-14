import Root from "../../Layout/Root";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../Components/NotFound/NotFound";
import MyCraftList from "../../Components/MyCraftList/MyCraftList";
import AddCraftItem from "../../Components/AddCraftItem/AddCraftItem";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Home from "../../Components/Home/Home";
import CraftItemNav from "../../Components/CraftItemsNav/CraftItemNav";
import Details from "../../Pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/myItems",
        element: <MyCraftList></MyCraftList>,
        loader: () => fetch("http://localhost:3000/items"),
      },
      {
        path: "/craftItemsNav",
        element: <CraftItemNav></CraftItemNav>,
        loader: () => fetch("http://localhost:3000/items"),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/items/${params.id}`),
      },
      {
        path: "/addItems",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
