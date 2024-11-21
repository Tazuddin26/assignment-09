import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/discount.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { PiUserCircleLight } from "react-icons/pi";

const Header = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const handleSignOut = () => {
    handleLogout()
      .then(() => {})
      .catch((error) => error.message);
  };
  const menuLink = (
    <>
      {user && (
        <>
          <li className="font-mono">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="font-mono ">
            <NavLink
              to="/brands"
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              Brand
            </NavLink>
          </li>

          <li className="font-mono">
            <NavLink
              to="/cashback"
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              Bonus
            </NavLink>
          </li>
          {/* <li className="text-xl">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              About
            </NavLink>
          </li> */}
          <li className=" font-mono">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              My-Profile
            </NavLink>
          </li>
          <li className="font-mono">
            <NavLink
              to="/updateprofile"
              className={({ isActive }) =>
                `${isActive ? "underline text-amber-600" : ""}`
              }
            >
              Update-Profile
            </NavLink>
          </li>
        </>
      )}{" "}
    </>
  );
  return (
    <div className="bg-sky-100 border">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-sky-50 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <div className="flex items-center gap-2 ml-3 my-2 rounded-xl">
                {user?.email ? (
                  <>
                    <span className="flex items-center gap-2 rounded-xl ">
                      <img
                        src={user.photoURL}
                        className="w-10 rounded-full object-cover"
                        alt=""
                      />
                      <p className=" menu-horizontal  text-base font-bold ">
                        {user.displayName}
                      </p>
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      <PiUserCircleLight
                        size={44}
                        className="font-extraLight"
                      />
                    </span>
                  </>
                )}
              </div>
              <hr />
              {menuLink}
            </ul>
          </div>

          <NavLink to="/" className=" flex items-center gap-2 ">
            <img
              src={Logo}
              className="w-12 object-cover rounded-full transition-all duration-300 scale-105"
              alt=""
            />
            <p className="lg:text-2xl font-semibold text-amber-800 font-serif">
              Discount Shop
            </p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className=" menu-horizontal px-1 gap-5 ">{menuLink}</ul>
        </div>
        {/* <NavLink to='/login' className="navbar-end">
          <button className="btn">{user?.email }</button>
        </NavLink> */}
        <div className="navbar-end gap-2">
          {user?.email ? (
            <>
              <span className="items-center justify-center gap-2  p-1 navbar-center hidden lg:flex ">
                <p className=" menu-horizontal  text-base font-bold ">
                  {user.displayName}
                </p>
                <img
                  src={user.photoURL}
                  className="w-10 rounded-full object-cover"
                  alt=""
                />
              </span>
              <button onClick={handleSignOut} className="btn btn-outline">
                Logout
              </button>
            </>
          ) : (
            <>
              <span>
                <PiUserCircleLight size={44} className="font-extraLight" />
              </span>
              <NavLink to="/login">
                <button className="btn btn-outline">Login </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
