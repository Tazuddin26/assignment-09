import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-sky-100 text-base-content rounded p-10 ">
        <nav className="grid grid-flow-col gap-4 text-xl">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Information</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <IoLogoTwitter size={40} className="text-sky-500"/>
            </a>
            <a>
              <IoLogoYoutube size={40} className="text-red-600"/>
            </a>
            <a>
              <IoLogoFacebook size={40} className="text-blue-600"/>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Coupon Discount Shop
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
