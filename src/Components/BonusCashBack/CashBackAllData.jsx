/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const CashBackAllData = ({ cashBackBonus }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-4 border rounded-2xl mb-10 shadow-2xl bg-sky-50">
      {cashBackBonus.map((data) => (
        <>
          <div className="flex border-b w-full p-4 text-xl gap-2">
            <div className="flex items-center  ">
              <img src={data.brand_logo} alt="" className="w-10 h-10 rounded-full object-cover border"/>
            </div>
            <div className="w-4/12 justify-start items-center flex">
              <p>{data.brand_name}</p>
            </div>
            <div className="w-4/12 justify-center items-center flex">
              <p>{data.cashBack}</p>
            </div>
            <div className="w-4/12 justify-end items-center flex">
              <NavLink to={data.shop_link}>
                <button className="btn btn-outline bg-sky-400">Shop Now</button>
              </NavLink>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CashBackAllData;
