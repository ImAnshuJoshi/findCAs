import Logofooter from "../../assets/Logofooter.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary to-[143.96%]">
      <div className="px-7 md:flex pt-8 md:space-y-0 space-y-6 justify-around pb-52">
        <div>
          <img src={Logofooter} alt="" className="pb-4" />
          <p className=" text-sm inline-block w-[272px] text-white">
            India's first platform dedicated to simplifying partner search
          </p>
        </div>
        <div>
          <p className=" font-bold text-white text-sm inline-block">COMPANY</p>
        </div>
        <div>
          <p className=" font-bold text-white text-sm inline-block">
            SOLUTIONS
          </p>
        </div>
        <div>
          <p className=" font-bold text-white text-sm inline-block">
            RESOURCES
          </p>
        </div>
        <div>
          <p className=" font-bold text-white text-sm inline-block">SUPPORT</p>
        </div>
        <div>
          <p className=" font-bold text-white text-sm inline-block">LEGAL</p>
        </div>
      </div>
      <div className="px-7">
        <hr className="border-t-2" />
      </div>
      <div className="px-7 pt-8 flex items-center justify-between pb-11">
        <p className=" text-sm text-white inline-block">
          Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
          Maharashtra
        </p>
        <div className="flex gap-6">
          <FaFacebook className="text-white" />
          <FaInstagram className="text-white" />
          <FaLinkedin className="text-white" />
          <FaWhatsapp className="text-white" />
        </div>
      </div>
      <div className=" pm-11 bg-black">
        <p className="text-white text-xs text-center py-4 ">
          Registered trademark of India Private Limited © 2023 loerumipsum Inc.
          All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
