import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const { brand_logo, brand_name, coupons, description, isSaleOn } =
    useLoaderData();
  if (isSaleOn === true) {
    return (
      <div className="p-4">
        <div className="card lg:card-side bg-sky-50 shadow-xl max-w-7xl mx-auto mt-6 border">
          <figure className="">
            <img
              src={brand_logo}
              alt="Movie"
              className="w-full h-[200px] object-cover"
            />
          </figure>
          <div className="card-body ">
            <h1 className="card-title lg:text-3xl ">{brand_name}</h1>
            <h2 className="lg:text-2xl font-extralight ">{description}</h2>
            {coupons.map((coupon, index) => (
              // eslint-disable-next-line react/jsx-key
              <div
                className="lg:flex-none flex justify-between items-center"
                key={index}
              >
                <ul className="lg:text-xl font-extralight">
                  <li className="">{coupon.categories[0]}</li>
                  <li className="">{coupon.categories[1]}</li>
                  <li className="">{coupon.categories[2]}</li>
                </ul>
                <div className="">
                  <button className="btn btn-outline ">
                    {coupon.coupon_code}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>no data</p>
      </div>
    );
  }
};

export default BrandDetails;
