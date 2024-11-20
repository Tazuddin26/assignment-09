/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";

const DisplayBrands = ({ brandData }) => {
  const { brand_logo, brand_name, coupons, id, rating, description, isSaleOn } =
    brandData;
  //     const [view, setview] = useState('')
  //     const handleCoupon = () => {
  //         const coupon = if (isSaleOn) {

  //     }
  // }

  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl border h-[400px] ">
        <figure className=" ">
          <img
            src={brand_logo}
            alt="logo"
            className="w-full lg:h-[150px] h-[150px] rounded-xl hover:scale-105 duration-300 "
          />
        </figure>

        <div className="card-body items-center text-center ">
          <h2 className="card-title text-2xl ">{brand_name}</h2>

          <p className="text-base">{description}</p>
          <p className="w-full mt-6">
            {coupons.map((coupon) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                {isSaleOn && (
                  <div className="animate__animated animate__bounce animate__infinite animate__slower text-xl text-amber-600 ">
                    Sale is on!
                  </div>
                )}
                <button className="btn btn-outline">View Coupons</button>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBrands;
