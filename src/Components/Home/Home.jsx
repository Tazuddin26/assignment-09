import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DisplayBrand from "../DisplayBrand/DisplayBrand";
import Marquee from "react-fast-marquee";
import BonusCashBack from "../BonusCashBack/BonusCashBack";

const Home = () => {
  const allBrandData = useLoaderData();

  return (
    <div>
      <Banner />
      <p className="lg:ml-20 text-2xl font-bold mt-4 text-center">
        Most Top Discount Brands
      </p>
      <Marquee pauseOnHover={true} className="space-x-4 cursor-pointer mb-10">
        <div className=" mt-5 flex gap-3 lg:p-0 p-3 ">
          {allBrandData.map((brandData) => (
            <DisplayBrand key={brandData.id} brandData={brandData} />
          ))}
        </div>
      </Marquee>

      {/* <button className="btn btn-accent">
        <NavLink to='/brands'>Show More</NavLink>
      </button> */}
    </div>
  );
};

export default Home;
