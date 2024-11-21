import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Home/Home";
import BrandDetails from "../BrandDetails/BrandDetails";
import Brand from "../Brand/Brand";
import Login from "../Account/Login";
import Register from "../Account/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Account/Profile";
import CouponPage from "../CouponPage/CouponPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import BonusCashBack from "../BonusCashBack/BonusCashBack";
import About from "../Account/About";
import UpdateProfile from "../Account/UpdateProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
        loader: () => fetch("coupondata.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/brands/:id",
        element: (
          <PrivateRoute>
            <BrandDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const resData = await fetch("/coupondata.json");
          const data = await resData.json();
          const singleData = data.find(
            (singleData) => singleData.id == params.id
          );
          return singleData;
        },
      },
      {
        path: "/brands",
        element: (
          <PrivateRoute>
            <Brand />
          </PrivateRoute>
        ),
        loader: () => fetch("coupondata.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/coupon",
        element: (
          <PrivateRoute>
            <CouponPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/cashback",
        element: (
          <PrivateRoute>
            <BonusCashBack />
          </PrivateRoute>
        ),
        loader: () => fetch("coupondata.json"),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
