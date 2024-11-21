/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const BonusCashData = ({ cashBackData }) => {
  const { brand_logo, brand_name, cashBack, rating } = cashBackData;

  if (rating > 4.4) {
    return (
      <div className=" mb-10">
        <div className="card bg-base-100 shadow-xl border h-[300px] ">
          <figure className=" ">
            <img
              src={brand_logo}
              alt="logo"
              className="w-full lg:h-[150px] h-[150px] rounded-xl hover:scale-105 duration-300 "
            />
          </figure>
          <hr className="mt-4" />
          <div className="card-body items-center text-center ">
            <h2 className="card-title text-2xl ">{brand_name}</h2>
            <p className="text-sky-600 text-xl">{cashBack}</p>
            <p className="">Rating: {rating}</p>
          </div>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button> */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    );
  } else {
    return;
  }
};

export default BonusCashData;
