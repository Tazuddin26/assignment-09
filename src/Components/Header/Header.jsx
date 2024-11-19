import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/discount.png";

const Header = () => {
  const menuLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "underline text-amber-600" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/brand"
          className={({ isActive }) =>
            `${isActive ? "underline text-amber-600" : ""}`
          }
        >
          Brand
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline text-amber-600" : ""}`
          }
        >
          My-Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline text-amber-600" : ""}`
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
    return (
      <div className="bg-sky-200 border  ">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {menuLink}
              </ul>
            </div>
            <Link className=" flex items-center gap-2">
              <img
                src={Logo}
                className="w-14 object-cover rounded-full transition-all duration-300 scale-105"
                alt=""
              />
              <p className="text-2xl font-semibold text-amber-800 font-serif">Discount Shop</p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className=" menu-horizontal px-1 gap-3">{menuLink}</ul>
          </div>
          <div className="navbar-end">
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    );
};

export default Header;
