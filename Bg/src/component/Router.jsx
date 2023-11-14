import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/reg",
        element:<Register/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      }
    ],
  },
]);
export default router;