import { NavLink, useLoaderData } from "react-router-dom";
import BonusCashData from "./BonusCashData";
import CashBackAllData from "./CashBackAllData";
import { RiArrowUpDownFill } from "react-icons/ri";

const BonusCashBack = () => {
  const cashBackBonus = useLoaderData();

  return (
    <div>
      <p className="lg:ml-20 ml-4 text-2xl font-bold mt-4 ">
        Featured Bonus Cash Back Stores
      </p>

      <div className=" mt-5 gap-3 lg:p-0 p-3 grid lg:grid-cols-5 grid-cols-2 max-w-7xl mx-auto ">
        {cashBackBonus.map((cashBackData) => (
          <BonusCashData key={cashBackData.id} cashBackData={cashBackData} />
        ))}
      </div>
      {/* 
      <button className="btn btn-accent">
        <NavLink to="/brands">Show More</NavLink>
      </button> */}
      <div className="max-w-7xl mx-auto">
        <h1 className="lg:ml-4 ml-2 text-2xl font-bold my-8 ">
          All Bonus Cash Back Stores
        </h1>
        <div className="px-2">
          <CashBackAllData cashBackBonus={cashBackBonus} />
        </div>
      </div>
    </div>
  );
};

export default BonusCashBack;
