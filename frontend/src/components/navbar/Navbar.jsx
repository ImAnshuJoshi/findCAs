import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const links = [
    {
      id: 1,
      link: "solutions",
    },
    {
      id: 2,
      link: "features",
    },
    {
      id: 3,
      link: "about",
    },
  ];

  return (
    <div className="flex flex-shrink-0 justify-between items-center w-full h-16 sticky px-4 md:pl-6">
      <div className=" flex items-center w-full">
        <Link to="/" smooth duration={700} onClick={() => navigate("/")}>
          <div className="cursor-pointer">
            <p className="font-extrabold text-2xl italic cursor-pointer hover:scale-110 duration-200 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text ">FindCAs</p>
          </div>
        </Link>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-5 px cursor-pointer capitalize font-medium text-black hover:scale-110 duration-200 "
            >
              <Link to={link} smooth duration={700} >
                <div className="flex gap-2 items-center justify-center">
                  <div className="text-[18px]"> {link} </div>
                  <RiArrowDownSLine size={24} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-[8px] px-[10px] items-center justify-center">
        <button className="text-primary rounded-[10px] border-primary border-[1.5px]  px-[10px] py-1">
          Login
        </button>
        <button className="text-white rounded-[10px] bg-primary border-[1.5px] px-[10px] py-1">
          Register
        </button>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer text-black pr-4 z-10"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className=" md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-primary to-secondary text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={700}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;