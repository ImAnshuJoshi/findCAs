import SolutionBG from "../../assets/SolutionBG.png";
const Solution = () => {
  const solutionStyle = {
    backgroundImage: `url(${SolutionBG})`,
  };

  return (
    <div className="px-7 bg-[#FAFBFC]">
      <div>
        <h2 className="text-bold md:text-[65px] text-[30px] text-center pt-12 font-popp">
          Want To{" "}
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Join
          </span>{" "}
          Us
        </h2>
      </div>
      <div className="" style={solutionStyle}>
        <div className="">
          <p className="text-center h-[38px] text-[25px] font-popp">
            To remain with us, it is essential that you diligently follow the
            steps provided
          </p>
        </div>
        <div className="pt-[84px] flex flex-wrap gap-11 justify-between">
          <div className="h-[266px] w-[405px] rounded-[20px] shadow-md bg-[#FFFFFF]">
            <span className="bg-gradient-to-r p-3 from-primary to-secondary text-white rounded-[10px] font-bold relative">
              1<sup>st</sup>
            </span>

            <div className="flex flex-col px-7">
              <div className="pt-6">
                <p className="text-center font-bold font-popp">
                  Commencement of business{" "}
                </p>
              </div>
              <div className=" pt-[5px] px-2">
                <p className="text-center font-popp">
                  Invested shareholders must confirm payment and office address
                </p>
              </div>
              <div className="w-[341] h-[113px] rounded-[10px] flex flex-row bg-[#F4F4F4] pt-4">
                <div className="w-1/2 pl-4">
                  <p className="text-lg font-bold text-primary">Due Date</p>
                  <p className=" font-sans">Within 180 days</p>
                </div>
                <div className="w-1/2 pl-4">
                  <p className="text-lg font-bold text-secondary">
                    Penalty fees
                  </p>
                  <div>
                    <span className="font-bold text-[14px]">₹50,000 </span>
                    <span className="text-[12px]">for the company</span>
                  </div>
                  <div>
                    <span className="font-bold text-[14px]">₹10,000 </span>
                    <span className="text-[12px]">/day for directors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className=" font-popp pt-2 text-base">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className=" font-bold">every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
      </div>
    </div>
  );
};

export default Solution;
