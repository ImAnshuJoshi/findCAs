import SolutionBG from "../../assets/SolutionBG.png";
import { useState } from "react";
const Solution = () => {
  const solutionStyle = {
    backgroundImage: `url(${SolutionBG})`,
  };
  const [solutionCards, setSolutionCard] = useState([
    {
      id: [1, "th"],
      title: "Commencement of business",
      details: "Invested shareholders must confirm payment and office address",
      dueDate: "Within 180 days",
      penaltyfee: [
        {
          feeFirst: "₹50,000 ",
          forCompany: "for the company",
          feeSecond: "₹10,000",
          duration: "/day for directors",
        },
      ],
    },
    {
      id: [2, "nd"],
      title: "Auditor Appointment",
      details: "Company informs new auditor and submits ADT.1 form to ROC.",
      dueDate: "Within 30 days ",
      penaltyfee: [
        {
          feeFirst: "₹300",
          forCompany: "per month.",
          feeSecond: "",
          duration: "",
        },
      ],
    },
    {
      id: [3, "rd"],
      title: "DIN eKYC",
      details: "Directors share personal information for identification & verification ",
      dueDate: "Every Year",
      penaltyfee: [
        {
          feeFirst: "₹5000",
          forCompany: "one time",
          feeSecond: "",
          duration: "",
        },
      ],
    },
    {
      id: [4, "th"],
      title: "DPT-3",
      details: "Companies report money taken from people to ROC; auditors confirm details.",
      dueDate: "Within 30 days ",
      penaltyfee: [
        {
          feeFirst: "₹300",
          forCompany: "per month.",
          feeSecond: "",
          duration: "",
        },
      ],
    },
    {
      id: [5, "th"],
      title: "MCA Form AOC-4",
      details: "It's like an official report card for a company's document",
      dueDate: "On or Before 30th November s",
      penaltyfee: [
        {
          feeFirst: "₹200",
          forCompany: "per day",
          feeSecond: "",
          duration: "(No upper limit)*",
        },
      ],
    },
    {
      id: [6, "th"],
      title: "MCA Form MGT-7",
      details: "Companies must annually report activities and finances to the registrar.",
      dueDate: "On or Before 31st December",
      penaltyfee: [
        {
          feeFirst: "₹200",
          forCompany: "per day",
          feeSecond: "",
          duration: "(No upper limit)*",
        },
      ],
    },
  ]);

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
        <div className="pt-[84px] flex flex-wrap gap-11 justify-around">
          {/* -----------cardDetails---------- */}

          {solutionCards.map((card, index) => (
            <div
              key={index}
              className="h-[266px] w-[405px] rounded-[20px] shadow-md bg-[#FFFFFF]"
            >
              <span className="bg-gradient-to-r p-3 from-primary to-secondary text-white rounded-[10px] font-bold relative">
                {card.id[0]}<sup>{card.id[1]}</sup>
              </span>

              <div className="flex flex-col px-7">
                <div className="pt-6">
                  <p className="text-center font-bold font-popp">
                    {card.title}
                  </p>
                </div>
                <div className=" pt-[5px] px-2">
                  <p className="text-center font-popp">
                    {card.details}
                  </p>
                </div>
                <div className="w-[341] h-[113px] rounded-[10px] flex flex-row bg-[#F4F4F4] pt-4">
                  <div className="w-1/2 pl-4">
                    <p className="text-lg font-bold text-primary">Due Date</p>
                    <p className=" font-sans">{card.dueDate}</p>
                  </div>
                  <div className="w-1/2 pl-4">
                    <p className="text-lg font-bold text-secondary">
                      Penalty fees
                    </p>
                    <div>
                      <span className="font-bold text-[14px]">{card.penaltyfee[0].feeFirst} </span>
                      <span className="text-[12px]">{card.penaltyfee[0].forCompany}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[14px]">{card.penaltyfee[0].feeSecond} </span>
                      <span className="text-[12px]">{card.penaltyfee[0].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* -------------end--------- */}
        </div>
      </div>
      <div>
        <p className=" font-popp pt-2 text-base">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
          <span className=" font-bold">every day</span> until you file the form
          . There is no maximum penalty amount. So, if you don&apos;t file the
          form for a year, you will owe ₹73,000 per form
        </p>
      </div>
    </div>
  );
};

export default Solution;
