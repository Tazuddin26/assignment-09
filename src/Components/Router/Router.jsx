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
import UpdateProfile from "../Account/UpdateProfile";
import BonusCashBack from "../BonusCashBack/BonusCashBack";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <Brand />,
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
        path: '/cashback',
        element: <BonusCashBack />,
         loader: () => fetch("coupondata.json"),
      }
    ],
  },
]);

export default router;
