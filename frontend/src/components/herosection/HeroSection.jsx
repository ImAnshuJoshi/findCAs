import NavBar from "../navbar/Navbar";
import HeroOne from "../../assets/Hero1.jpeg";
import HeroTwo from "../../assets/Hero2.jpeg";
import HeroThree from "../../assets/Hero3.jpeg";
const HeroSection = () => {
  const gradientStyle = {
    background:
      "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
  };

  return (
    <div className="w-full backdrop-blur-2xl" style={gradientStyle}>
      <div>
        <NavBar />
      </div>
      <div>
      <div className="flex py-[84px] pl-7 flex-col md:flex-row relative">
        <div className="md:w-1/2 py-11 flex-row w-full">
          <div className="md:w-[600px]">
            <h2 className="text-bold md:text-[59px] text-[30px] font-popp">
              Find{" "}
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                Partners
              </span>{" "}
              (CAs) <br /> available online
            </h2>
            <p className="text-gray-600 pb-14 w-full">
              <span className="text-bold">CONNECT </span>with us where your
              services are listed and visible to a myriad of businesses seeking
              CA’s for compliance support
            </p>
            <div className="flex">
              <input
                type="search"
                name="search"
                placeholder="Search by name"
                id="search"
                className=" w-full rounded-l-[10px] border-none h-[73px] px-4"
              />
              <button className="bg-primary rounded-[10px] text-white px-9 hover:text-black">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full ">
          <div className="flex gap-2 px-7">
            <div className="w-1/3 items-baseline pt-20">
              <img
                src={HeroOne}
                alt="heroOne"
                className="rounded-[20px] w-[198px] h-[400px] object-cover object-center"
              />
            </div>
            <div className="w-1/3">
              <img
                src={HeroTwo}
                alt="heroTwo"
                className="rounded-[20px] w-[198px] h-[400px] object-cover object-center"
              />
            </div>
            <div className="w-1/3 pt-10">
              <img
                src={HeroThree}
                alt="heroThree"
                className="rounded-[20px] w-[198px] h-[400px] object-cover object-center"
              />
            </div>
          </div>
        </div>
        </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1536"
            height="210"
            viewBox="0 0 1536 210"
            fill="none"
            className="absolute inset-x-0 bottom-0 -z-10"
          >
            <path d="M0 210H1536V80.0669V0L0 192.622V210Z" fill="#FAFBFC" />
          </svg>
      </div>
    </div>
  );
};

export default HeroSection;
