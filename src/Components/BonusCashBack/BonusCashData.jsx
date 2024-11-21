/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const BonusCashData = ({ cashBackData }) => {
  const { brand_logo, brand_name, cashBack, rating } = cashBackData;
  
  if (rating > 4.4) {
    return (
      <div className="mb-10">
        <div className="card bg-base-100 shadow-xl border h-[300px] ">
          <figure className=" ">
            <img
              src={brand_logo}
              alt="logo"
              className="w-full lg:h-[150px] h-[150px] rounded-xl hover:scale-105 duration-300 "
            />
          </figure>

          <div className="card-body items-center text-center ">
            <h2 className="card-title text-2xl ">{brand_name}</h2>
            <p className="text-sky-600">{cashBack}</p>
            <p className="text-sky-600">{rating}</p>

            {/* <p className="w-full mt-6">
              {coupons.map((coupon, idx) => (
                // eslint-disable-next-line react/jsx-key
                <div key={idx}>
                  {isSaleOn && (
                    <div className="animate__animated animate__bounce animate__infinite animate__slower text-xl text-amber-600 ">
                      Sale is on!
                    </div>
                  )}
                  <NavLink to={`/details/${id}`}>
                    <button className="btn btn-outline">View Coupons</button>
                  </NavLink>
                </div>
              ))}
            </p> */}
          </div>
        </div>
      </div>
    );
  } else {
    ("");
  }
};

export default BonusCashData;
