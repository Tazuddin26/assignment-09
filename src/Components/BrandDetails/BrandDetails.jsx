import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import noData from "../../assets/nodata.png";

const BrandDetails = () => {
  const {
    brand_logo,
    brand_name,
    coupons,
    description,
    isSaleOn,
    rating,
    shop_link,
  } = useLoaderData();

  const [couponCode, setCouponCode] = useState("");
  const handleCopyCoupon = (coupon) => {
    setCouponCode((previous) => ({
      ...previous,
      [coupon]: true,
    }));
    setCouponCode("");
    toast.success(`Copy ${brand_name} Coupon Code Successfully!`, {
      position: "top-center",
    });
  };

  if (isSaleOn === true) {
    return (
      <div className="p-4">
        <div className="card bg-sky-50 shadow-xl max-w-2xl mx-auto mt-6 border">
          <div className="flex items-center justify-between">
            <figure className="gap-4 p-4 ">
              <img
                src={brand_logo}
                alt="Movie"
                className="w-20 h-20 hover:border-teal-700 border-2 ease-in-out duration-500 hover:scale-105 object-cover rounded-full "
              />
              <h1 className="card-title text-4xl justify-center items-center text-gray-500 font-mono ">
                {brand_name}
              </h1>
            </figure>

            <div className=" gap-2 p-6">
              <p className="text-gray-500 font-mono font-bold">
                <span>Rating: </span>
                {rating}
              </p>
              <span>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </span>
            </div>
          </div>
          <hr className="w-11/12 ml-7 mt-4" />
          <div className="p-2 ml-4 ">
            <h2 className="text-xl font-extralight text-center">
              {description}
            </h2>

            {coupons.map((coupon, index) => (
              <div key={index}>
                <p className="text-4xl font-mono font-bold text-center mt-2">
                  {coupon.discount}
                </p>
                <div className="lg:flex-none flex justify-between items-center mt-6">
                  <ul className="lg:text-xl font-extralight">
                    <li className="">{coupon.categories[0]}</li>
                    <li className="">{coupon.categories[1]}</li>
                    <li className="">{coupon.categories[2]}</li>
                  </ul>

                  <div className="join mr-4">
                    <input
                      value={coupon.coupon_code}
                      readOnly
                      placeholder="Copy Code"
                      className="border border-black input-bordered join-item "
                    />
                    <CopyToClipboard
                      text={coupon.coupon_code}
                      onCopy={() => {
                        handleCopyCoupon(coupon.coupon_code);
                      }}
                    >
                      <button className="btn btn-outline join-item text-base">
                        Copy Code
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className="flex justify-end items-center mr-4 my-3">
                  <NavLink to={shop_link}>
                    <button className="btn btn-accent px-10 text-base ">
                      Use Now
                    </button>
                  </NavLink>
                </div>
                <p className="text-amber-600 text-end mr-4 my-2">
                  Coupon Valid Date: {coupon.expiry_date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    <div className=" border card card-body max-w-5xl mx-auto my-20 bg-sky-50 ">
      <img src={noData} alt="" className="rounded-2xl object-cover" />
    </div>;
  }
};

export default BrandDetails;
