import { useLoaderData } from "react-router-dom";
// import DisplayBrand from "../DisplayBrand/DisplayBrand";
import DisplayBrands from "./DisplayBrands";

const Brand = () => {
  const brands = useLoaderData();
  return (
    <div className="mt-10 max-w-7xl mx-auto ">
      <h1 className="text-center text-3xl font-mono border p-6 rounded-xl bg-sky-50 ">
        All Brands Cash Back Event
      </h1>
      <div className=" mt-10 grid lg:grid-cols-4 grid-cols-1 gap-3 lg:p-0 p-3 ">
        {brands.map((brandData) => (
          <DisplayBrands key={brandData.id} brandData={brandData} />
        ))}
      </div>
    </div>
  );
};

export default Brand;
