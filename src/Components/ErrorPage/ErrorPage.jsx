import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const handleGoBack = () => {
   navigate("/");
}
  return (
    <div className="flex justify-center items-center my-32">
      <div className="border rounded-2xl w-8/12 h-[400px] bg-slate-50  ">
        <button onClick={handleGoBack} className="btn btn-outline text-base bg-sky-300">
          Go Back Home{" "}
        </button>
        <div className="space-y-4 mt-28">
          <h1 className="text-4xl font-bold text-gray-500 text-center">
            Oops!
          </h1>
          <p className="text-4xl font-bold text-center text-gray-500">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-4xl font-bold text-center text-gray-500">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
