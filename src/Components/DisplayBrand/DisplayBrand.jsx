/* eslint-disable react/prop-types */
const DisplayBrand = ({ brandData }) => {
  const { brand_logo, brand_name, coupons } = brandData;

  console.log(brandData);
  return (
    <div className="lg:w-full">
      
      <div className="card bg-base-100 shadow-xl border w-full h-[250px] ">
        <figure className="px-4 pt-4 ">
          <img
            src={brand_logo}
            alt="logo"
            className="rounded-xl lg:w-full h-[100px] object-cover hover:scale-105 duration-300 "
          />
        </figure>
        <hr className=" mt-6" />
        <div className="card-body items-center text-center ">
          <h2 className="card-title ">{brand_name}</h2>
          <p className="w-full text-sky-700">
            {coupons.map((coupon) => (
              // eslint-disable-next-line react/jsx-key
              <p>{coupon.discount}</p>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBrand;
