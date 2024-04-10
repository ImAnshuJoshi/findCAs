import NavBar from "../navbar/Navbar";
import SearchBar from "../searchbar/SearchBar";
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
      <NavBar />
      <div className="container mx-auto py-12 md:py-24 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Find{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Partners (CAs)
              </span>{" "}
              available online
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mt-4">
              <span className="font-bold">CONNECT</span> with us where your
              services are listed and visible to businesses seeking CA’s for compliance support.
            </p>
            <SearchBar />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
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
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100vw"
        viewBox="0 0 1536 210"
        fill="none"
        className="absolute inset-x-0 bottom-0 -z-10"
      >
        <path d="M0 210H1536V80.0669V0L0 192.622V210Z" fill="#FAFBFC" />
      </svg>
    </div>
  );
};

export default HeroSection;
