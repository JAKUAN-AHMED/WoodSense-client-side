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
import CategoryList from "../../Pages/Details/CategoryList/CategoryList";
import UpdateCraft from "../../Pages/Update/UpdateCraft";
import ProtectedRoutes from "../../Pages/Protected/ProtectedRoute";

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
        element: (
          <ProtectedRoutes>
            <MyCraftList></MyCraftList>
          </ProtectedRoutes>
        ),
        loader: () => fetch("http://localhost:3010/items"),
      },
      {
        path: "/craftItemsNav",
        element: <CraftItemNav></CraftItemNav>,
        loader: () => fetch("http://localhost:3010/items"),
      },
      {
        path: "/details/:id",
        element: (
          <ProtectedRoutes>
            <Details></Details>
          </ProtectedRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3010/items/${params.id}`),
      },
      {
        path: "/addItems",
        element: (
          <ProtectedRoutes>
            <AddCraftItem></AddCraftItem>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/subcategory/:id",
        element: <CategoryList></CategoryList>,
        loader: ({ params }) =>
          fetch(`http://localhost:3010/items/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <ProtectedRoutes>
            <UpdateCraft></UpdateCraft>
          </ProtectedRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3010/items/${params.id}`),
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
