import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DisplayBrand from "../DisplayBrand/DisplayBrand";
import Marquee from "react-fast-marquee";

const Home = () => {
  const allBrandData = useLoaderData();

  return (
    <div>
      <Banner />
      {/* <Marquee pauseOnHover={true} className="space-x-4 cursor-pointer"> */}
      <p className="lg:ml-20 text-2xl font-bold mt-4 text-center">ALL Discount Brand</p>
      <div className=" mt-5 grid lg:grid-cols-6 grid-cols-2 max-w-7xl mx-auto gap-3 lg:p-0 p-3 ">
        {allBrandData.map((brandData) => (
          <DisplayBrand key={brandData.id} brandData={brandData} />
        ))}
      </div>
      {/* </Marquee> */}
    </div>
  );
};

export default Home;
