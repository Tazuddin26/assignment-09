import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
};

export default RootLayout;
