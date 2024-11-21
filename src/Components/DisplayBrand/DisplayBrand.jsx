import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */
const DisplayBrand = ({ brandData }) => {
  const { brand_logo, brand_name, coupons } = brandData;

  return (
    <div className="lg:w-full">
      <div className="card bg-base-100 shadow-xl border w-full h-[250px] ">
        <figure className="px-2 pt-2 ">
          {/* <NavLink to={`/details/${id}`}> */}
          <NavLink to="/brands">
            <img
              src={brand_logo}
              alt="logo"
              className="rounded-xl lg:w-full h-[100px] object-cover hover:scale-105 duration-300 "
            />
          </NavLink>
        </figure>

        <hr className=" mt-6" />
        <div className="card-body items-center text-center ">
          <h2 className="card-title ">{brand_name}</h2>
          <p className="w-full text-sky-700">
            {coupons.map((coupon, idx) => (
              <p key={idx}>{coupon.discount} </p>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBrand;
