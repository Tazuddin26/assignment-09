import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Register = () => {
  const navigate = useNavigate();
  const { handleCreateUser, profileManage, profileManageUpdate } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const handleRegister = (e) => {
    setError("");
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;
 
    if (password.length < 6) {
      setError("Password Length must be at least 6 character");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Must have a Lowercase letter in the password ");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Must have an Uppercase letter in the password ");
      return;
    }
    handleCreateUser(email, password).then((res) => {
      e.target.reset();
      profileManage(name, image);
      profileManageUpdate({ displayName: name, photoURL: image })
        .then(() => {
          navigate('/profile')
        }).catch(error => error.message)
      navigate("/");
    });
  };
  return (
    <div className=" min-h-screen">
      <div className="hero-content flex-col lg:ml-20">
        <div className="text-center lg:text-left mt-10">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="mx-auto text-red-600 text-sm">{error}</p>
          </form>

          <p className="mx-auto p-2">
            Already Have an Account? Please{" "}
            <Link to="/login" className="hover:underline font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
