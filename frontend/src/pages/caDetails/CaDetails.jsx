import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
const caDetails = () => {
  return (
    <div>
      <NavBar />
      <div className="px-7 py-7 md:flex w-full">
        <div className="md:w-2/5 mr-8 w-full">
          <p className="text-3xl font-popp font-bold">Michael Jackson</p>
          <p className=" text-xl font-popp pt-4 pr-4">
            I am here to provide my expertise in accounting and finance, which
            includes financial statements, economics, and auditing, all to
            assist you effectively
          </p>
          <div className="flex items-center gap-1 my-8">
            <StarIcon color="primary" />
            <span className=" font-popp text-xl text-primary">4.8</span>
            <span className=" font-popp text-xl">(89)</span>
          </div>
          <div className="w-full bg-white h-[216px] rounded-[20px] shadow-[2px_4px_15px_0_rgba(133,133,167,0.25)]">
            <div className="px-7">
              <div className=" flex items-center justify-between py-7">
                <span className=" leading-8 font-popp text-xl">
                  Basic to complex tasks
                </span>
                <span className=" font-popp text-2xl font-bold">₹4,370</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarMonth color="primary" className="" />
                <span className=" font-popp text-xl">
                  Delivers the job within 2 days
                </span>
              </div>
              <div className=" my-6 flex justify-between gap-2">
                  <button className=" w-[220px] font-popp bg-primary text-white py-[10px] px-5 rounded-[10px] hover:bg-blue-400">Request Proposal</button>
                  <button className=" w-[220px] font-popp border-[1.5px] border-primary bg-white text-primary py-[10px] px-5 rounded-[10px] hover:bg-slate-400">Chat with me</button>
              </div>
            </div>
          </div>
          <div>
            Roshan Jaiswal
          </div>
        </div>
        {/* .............................................. */}
        <div className="md:w-3/5 w-full md:my-0 my-16 ">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt=""
            className=" w-[733px] h-[412px]"
          />{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default caDetails;
