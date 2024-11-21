import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const { profileManageUpdate, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    profileManageUpdate({ displayName: name, photoURL: image })
      .then(() => {
        console.log("successful update");
        navigate("/profile");
        toast.success(`Update Profile ${user.displayName} Successfully!`, {
          position: "top-right",
        });
      })
      .catch((error) => error.message);
  };

  return (
    <div className=" min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Update Profile</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateProfile} className="card-body">
            <div className=" h-[200px] flex justify-center items-center">
              <img
                src={user.photoURL}
                alt=""
                className="w-50 rounded-full text-center"
              />
            </div>
            <p className="text-4xl text-center">{user.displayName}</p>
            <hr />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
