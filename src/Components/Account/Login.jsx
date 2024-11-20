import { useContext, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const { handleGoogleLogin, handleSignin } = useContext(AuthContext);
const [passwordShow, setPasswordShow] =useState(false)
  const [error, setError] = useState("");
  const emailRef = useRef();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    handleSignin(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset();

        navigate("/");
        navigate(location.state.from);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const googleHandler = () => {
    handleGoogleLogin().then((res) => {
      navigate("/");
      navigate(location.state.from);
    });
  };
  const handleForgotPassword = () => {
    const emailValue = emailRef.current.value;
    if (!emailValue) {
      toast.success(`Please Provide a valid Email`, {
        position: "top-right",
      });
    } else {
      sendPasswordResetEmail(auth, emailValue).then(() => {
        toast.success(`Password Reset Email Sent, Please Check your Email`, {
          position: "top-right",
        });
      });
    }
  };
  return (
    <div className=" min-h-screen">
      <div className="hero-content flex-col lg:ml-20">
        <div className="text-center lg:text-left mt-10">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passwordShow ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={() => setPasswordShow(!passwordShow)}
                className="absolute btn btn-xs right-1 top-12"
              >
                {passwordShow ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
              <label className="label">
                <a
                  onClick={handleForgotPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          <NavLink className="btn btn-outline mx-8">
            <button onClick={googleHandler}>Google Login</button>
          </NavLink>
          <p className="ml-6 p-2">
            If you want to access the website? Please{" "}
            <Link to="/register" className="hover:underline font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
