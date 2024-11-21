import { NavLink, useLoaderData } from "react-router-dom";
import BonusCashData from "./BonusCashData";
import CashBackAllData from "./CashBackAllData";

const BonusCashBack = () => {
  const cashBackBonus = useLoaderData();
  console.log();
  return (
    <div>
      <p className="lg:ml-20 text-2xl font-bold mt-4 text-center">
        Featured Bonus Cash Back Stores
      </p>

      <div className=" mt-5 gap-3 lg:p-0 p-3 grid grid-cols-5 max-w-7xl mx-auto ">
        {cashBackBonus.map((cashBackData) => (
          <BonusCashData key={cashBackData.id} cashBackData={cashBackData} />
        ))}
      </div>
      {/* 
      <button className="btn btn-accent">
        <NavLink to="/brands">Show More</NavLink>
      </button> */}
      <div className="max-w-7xl mx-auto">
        <h1 className="lg:ml-20 text-2xl font-bold my-8 text-center">
          All Bonus Cash Back Stores
        </h1>
        <div>
          <CashBackAllData cashBackBonus={cashBackBonus} />
        </div>
      </div>
    </div>
  );
};

export default BonusCashBack;
