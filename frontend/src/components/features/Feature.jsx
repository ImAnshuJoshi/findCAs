import ConnectIcon from "../../assets/icon-park-twotone_enquire.svg";
import ResearchIcon from "../../assets/icon-park-twotone_table-report.svg";
import AcademyIcon from "../../assets/icon-park-twotone_degree-hat.svg";
import SearchIcon from "../../assets/icon-park-twotone_search.svg";
import Student from "../../assets/Student.png"
const Feature = () => {
  return (
    <div id="features" className="px-7 py-20 md:flex bg-white ">
      <div className=" md:w-1/2 w-full">
        <p className="text-bold md:text-[65px] text-[30px] font-popp text-center md:text-start">
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            All-in-One
          </span>{" "}
          platform that Makes Easier
        </p>
        <p className="font-popp text-2xl mt-[14px] mb-8">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="md:w-1/2 flex mb-[62px]">
            <img src={SearchIcon} alt="" className="mr-[34px]" />

            <p className="w-[205px] font-popp text-xl">
              {" "}
              <span className="font-bold">SEARCH</span> for vital company
              information{" "}
            </p>
          </div>
          <div className="md:w-1/2 flex flex-start mb-[62px]">
            <img src={ConnectIcon} alt="" className="mr-[34px]" />

            <p className="w-[205px] font-popp text-xl">
              {" "}
              <span className="font-bold">CONNECT</span> with the resources to
              meet your business needs{" "}
            </p>
          </div>
          <div className="md:w-1/2 flex mb-[62px]">
            <img src={ResearchIcon} alt="" className="mr-[34px] w-[65px]" />

            <p className="w-[205px] font-popp text-xl">
              {" "}
              <span className="font-bold">RESEARCH</span> and generate reports
              that drive growth{" "}
            </p>
          </div>
          <div className="md:w-1/2 flex mb-[62px]">
            <img src={AcademyIcon} alt="" className="mr-[34px] w-[65px]" />

            <p className="w-[205px] font-popp text-xl">
              {" "}
              <span className="font-bold">ACADEMY</span> to give you the skills
              for success in your career{" "}
            </p>
          </div>
        </div>
      </div>

      <div className=" md:w-1/2 flex justify-center">
        <img src={Student} alt="student" className=" overflow-hidden" />
      </div>
    </div>
  );
};

export default Feature;
