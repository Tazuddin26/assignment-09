import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Home/Home";
import Brand from "../Brand/Brand";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader :()=> fetch('coupondata.json')
      },
      {
        path: "/brand",
        element: <Brand/>,
      },
    ],
  },
]);

export default router;
