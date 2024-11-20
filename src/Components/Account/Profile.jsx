import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-3xl mx-auto my-20 p-6 rounded-2xl bg-sky-50">
      <div className="hero bg-white rounded-2xl shadow-2xl">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={user.photoURL} className="w-44 rounded-lg shadow-2xl hover:scale-105 duration-300 " />
          <div>
            <h1 className="lg:text-4xl text-2xl ml-4 font-mono font-bold text-sky-600 mb-10">
              Welcome to My profile
            </h1>
            <h1 className="lg:text-4xl text-2xl font-bold ml-10 font-mono">
              {user.displayName}
            </h1>
            <p className="py-4 text-xl ml-10 font-mono">Email: {user.email}</p>
            <p className="lg:text-2xl text-xl underline ml-10 font-mono font-bold">
              More Features:
            </p>
            <div className="ml-10 space-y-4 my-4 lg:text-lg font-mono text-gray-700">
              {" "}
              <p className="">Creation Time: {user.metadata.creationTime}</p>
              <p>Last Signin: {user.metadata.lastSignInTime}</p>
              <p>Providing data: {user.providerData[0].providerId}</p>
              <p >UID: {user.uid}</p>
            </div>

            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
